"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AppLocale } from "@/i18n/strings";

interface LocaleValue {
  locale: AppLocale;
  setLocale: (l: AppLocale) => void;
}

const LocaleContext = createContext<LocaleValue | undefined>(undefined);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<AppLocale>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("app.locale") as AppLocale | null) : null;
    if (saved === "en" || saved === "gu") setLocale(saved);
  }, []);

  const setAndSave = (l: AppLocale) => {
    setLocale(l);
    if (typeof window !== "undefined") localStorage.setItem("app.locale", l);
  };

  const value = useMemo<LocaleValue>(() => ({ locale, setLocale: setAndSave }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}


