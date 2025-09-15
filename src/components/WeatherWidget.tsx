"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

interface WeatherData {
  current: {
    temperatureC: number | null;
    windKph: number | null;
    weatherCode: number | null;
  };
  daily: Array<{
    date: string;
    tMaxC: number | null;
    tMinC: number | null;
    precipProbMax: number | null;
    weatherCode: number | null;
  }>;
}

export default function WeatherWidget() {
  const { locale } = useLocale();
  const t = STRINGS[locale];
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    fetch("/api/weather", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject("Request failed")))
      .then((json) => mounted && setData(json))
      .catch(() => mounted && setError("Weather unavailable"))
      .finally(() => clearTimeout(timer));
    return () => {
      mounted = false;
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="border border-black/10 dark:border-white/10 rounded p-4">
      <div className="text-sm text-black/60 dark:text-white/60">{t.weatherTitle}</div>
      {!data && !error && <div className="text-sm mt-2">{t.loading}</div>}
      {error && <div className="text-sm mt-2 text-red-600">{error}</div>}
      {data && (
        <div className="mt-2">
          <div className="text-2xl font-semibold">
            {data.current.temperatureC != null ? Math.round(data.current.temperatureC) + "°C" : "--"}
          </div>
          <div className="text-xs text-black/60 dark:text-white/60">
            {t.wind} {data.current.windKph != null ? data.current.windKph + " " + t.kph : "--"}
          </div>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
            {data.daily.map((d) => (
              <div key={d.date} className="rounded border border-black/5 dark:border-white/10 p-2">
                <div className="text-[10px] sm:text-xs">
                  {new Date(d.date).toLocaleDateString(undefined, { weekday: "short" })}
                </div>
                <div className="text-xs sm:text-sm font-medium">
                  {d.tMaxC != null ? Math.round(d.tMaxC) : "--"}° / {d.tMinC != null ? Math.round(d.tMinC) : "--"}°
                </div>
                <div className="text-[9px] sm:text-[10px] text-black/60 dark:text-white/60">
                  {d.precipProbMax != null ? d.precipProbMax + "%" : "--"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


