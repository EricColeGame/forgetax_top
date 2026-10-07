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
  tagline: "Blacksmith Forging Guides, Sword Upgrades & Relic Builds",
  description: "Your complete Forgetax wiki for the blacksmith forging roguelite — sword upgrades, relic builds, forging strategies, great successes, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://forgetax.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://forgetax.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5245810/ForgeTax/",
  heroVideoId: "rCuWNTsoLFc", // ForgeTax gameplay showcase: dragon tribute & sword upgrades
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
