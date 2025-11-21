// Site-wide configuration
export const siteConfig = {
  name: "TurboHome",
  tagline: "The smartest way to buy a home.",
  url: "https://turbohome.com",
  meta: {
    title: "TurboHome - Flat Fee, No Commission Real Estate Agents",
    description: "Turn your agent's $30,000 commission into weapons you actually need: offer power, rate buydowns, and unbiased analysis.",
  },
  contact: {
    phone: "(510) 391-5392",
    email: "hello@turbohome.com",
    hours: "Mon - Fri, 9 AM - 6 PM PST",
  },
  licensing: {
    california: "CalDRE #02292670",
    texas: "TREC #744106",
  },
  press: ["Mercury News", "CBS News", "Business Insider", "USA Today", "Fast Company"],
  markets: ["California (Northern & Southern)", "Texas (Austin, Dallas, Houston)"],
};

export type SiteConfig = typeof siteConfig;
