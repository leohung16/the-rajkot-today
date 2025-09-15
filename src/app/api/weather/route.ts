import { NextResponse } from "next/server";

// Rajkot coordinates
const LAT = 22.3039;
const LON = 70.8022;

export const revalidate = 600; // cache for 10 minutes

export async function GET() {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(LAT));
  url.searchParams.set("longitude", String(LON));
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("current_weather", "true");
  url.searchParams.set(
    "hourly",
    "temperature_2m,precipitation_probability,rain,showers"
  );
  url.searchParams.set(
    "daily",
    "weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max"
  );

  try {
    const res = await fetch(url.toString(), { next: { revalidate }, cache: "force-cache" });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather" },
        { status: 502 }
      );
    }
    const data = await res.json();

  const current = {
    temperatureC: data?.current_weather?.temperature ?? null,
    windKph:
      data?.current_weather?.windspeed != null
        ? Math.round((data.current_weather.windspeed as number) * 1.852)
        : null,
    weatherCode: data?.current_weather?.weathercode ?? null,
  };

  const daily: Array<{
    date: string;
    tMaxC: number | null;
    tMinC: number | null;
    precipProbMax: number | null;
    weatherCode: number | null;
  }> = [];
  const len = data?.daily?.time?.length ?? 0;
  for (let i = 0; i < Math.min(len, 5); i++) {
    daily.push({
      date: data.daily.time[i],
      tMaxC: data.daily.temperature_2m_max?.[i] ?? null,
      tMinC: data.daily.temperature_2m_min?.[i] ?? null,
      precipProbMax: data.daily.precipitation_probability_max?.[i] ?? null,
      weatherCode: data.daily.weathercode?.[i] ?? null,
    });
  }

    return NextResponse.json({ current, daily });
  } catch {
    return NextResponse.json({ error: "Weather unavailable" }, { status: 502 });
  }
}


