import { defineRouting } from "next-intl/routing";

const locales = ["en", "de", "es", "fr"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
