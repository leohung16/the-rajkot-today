"use client";

import { useLocale } from "@/context/LocaleContext";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="text-xs">
      <button
        className={`px-2 py-1 rounded ${locale === "en" ? "border" : "opacity-70"}`}
        onClick={() => setLocale("en")}
      >
        English
      </button>
      <button
        className={`ml-2 px-2 py-1 rounded ${locale === "gu" ? "border" : "opacity-70"}`}
        onClick={() => setLocale("gu")}
      >
        ગુજરાતી
      </button>
    </div>
  );
}


