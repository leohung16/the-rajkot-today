"use client";

import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "@/i18n/strings";

export default function LocalizedText({ id }: { id: keyof typeof STRINGS.en }) {
  const { locale } = useLocale();
  const dict = STRINGS[locale] as Record<string, string>;
  return dict[id as string] ?? "";
}


