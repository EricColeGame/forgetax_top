export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Forgetax Wiki",
  shortName: "Forgetax",
  logoText: "F",
  tagline: "Forging Guides, Sword Upgrades & Relic Builds",
  description: "Your complete Forgetax wiki for the dark first-person forging roguelite — sword upgrades, relic builds, forging strategies, great successes, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://forgetax.top",
  supportEmail: "support@forgetax.top",
  gameUrl: "https://store.steampowered.com/app/5245810/ForgeTax/",
  heroVideoId: "YNzIvUBn2ZE", // Official ForgeTax trailer by GraveYard DEV (blacksmith roguelite showcase)
  social: {
    discord: "https://steamcommunity.com/app/5245810",
    youtube: "https://www.youtube.com/@GraveYardDEV",
  },
  locales: ["en", "de", "es", "fr"],
  defaultLocale: "en",
};
