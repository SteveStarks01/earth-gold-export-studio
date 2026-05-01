export const LOCALES = ["en", "fr", "de", "zh", "es", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { label: string; native: string; flag: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", native: "English", flag: "EN", dir: "ltr" },
  fr: { label: "French", native: "Français", flag: "FR", dir: "ltr" },
  de: { label: "German", native: "Deutsch", flag: "DE", dir: "ltr" },
  zh: { label: "Chinese", native: "中文", flag: "ZH", dir: "ltr" },
  es: { label: "Spanish", native: "Español", flag: "ES", dir: "ltr" },
  ar: { label: "Arabic", native: "العربية", flag: "AR", dir: "rtl" },
};

export const DEFAULT_LOCALE: Locale = "en";
