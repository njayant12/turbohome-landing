// All page content in one place
export const content = {
  hero: {
    headline: "You're Losing Offers, Drowning in Mortgage Payments, and Buying Blind.",
    subheadline: "TurboHome fixes all three—by turning your agent's $30,000 commission into weapons you actually need: offer power, rate buydowns, and unbiased analysis.",
    cta: {
      primary: { text: "Calculate Your Rebate", href: "#calculator" },
      secondary: { text: "How It Works", href: "#how-it-works" },
    },
  },

  problems: {
    title: "The Three Ways Homebuyers Get Crushed",
    subtitle: "(And Why Your Agent Commission Should Be Solving Them)",
    items: [
      {
        icon: "🏠❌",
        title: "You Keep Losing Offers",
        paragraphs: [
          "You're pre-approved for $800,000. You found the perfect house. You offered asking price.",
          "Then someone else offered $825,000. And someone else waived contingencies.",
          "Your agent says \"the market is just competitive.\" But here's what they don't tell you:",
        ],
        highlight: "Your buyer's agent is getting a $24,000 commission on this deal. That money could have been $24,000 more buying power to win the offer.",
        solution: "We rebate you the commission so you can boost your offer by $20K-30K and actually win in competitive markets.",
      },
      {
        icon: "📈💰",
        title: "Your Mortgage Payment Is Brutal",
        paragraphs: [
          "You won the $800,000 house. Congrats. Now you're paying $5,200/month at a 7% interest rate. That's $62,400 per year just in mortgage payments.",
          "You could buy down your rate now—but that costs $15K-30K upfront. Money you don't have after the down payment.",
        ],
        highlight: "Here's the brutal math: Your agent just made $24,000. That could have bought down your rate to 4.8% in year one, saving you $800/month ($9,600/year).",
        solution: "We rebate you the commission so you can fund a rate buydown and stop hemorrhaging money every month.",
      },
      {
        icon: "📄❓",
        title: "You're Buying Blind",
        paragraphs: [
          "The disclosure packet is 200 pages of dense legal language. The HOA docs mention \"special assessments\" but you don't know if that's $500 or $50,000.",
          "Your agent says \"looks good to me\" because they have 8 other clients and don't have time for deep analysis.",
        ],
        highlight: "You're about to make the biggest financial decision of your life—and you have no idea if you're getting screwed.",
        solution: "We use AI-powered analysis to give you unbiased property valuation, risk analysis of disclosures, and clear plain-English breakdowns.",
      },
    ],
  },

  howItWorks: {
    title: "Here's How: We Convert Your Agent Commission Into Solving These Problems",
    subtitle: "Traditional agents take a 2.5-3% commission ($20K-30K on most homes) and give you nothing in return. TurboHome takes a low flat fee and rebates you the rest.",
    steps: [
      {
        number: 1,
        title: "Meet Your TurboHome Agent",
        description: "We match you with a licensed, in-house agent who knows your market inside and out. Unlike discount brokers who cut service to cut costs, our agents do everything a traditional agent does: touring, analysis, coaching, offers, negotiations, and closing. The difference? We don't keep the full commission. You do.",
      },
      {
        number: 2,
        title: "Choose Your Rebate Path",
        intro: "You decide how to weaponize your rebate:",
        paths: [
          {
            title: "Path 1: Boost Your Offer",
            description: "Use the rebate to increase your purchase price by $20K-30K and win in competitive markets.",
          },
          {
            title: "Path 2: Buy Down Your Rate",
            description: "Use the rebate to fund a 2-1 mortgage buydown, dropping your rate to 4.8% in year one.",
          },
          {
            title: "Path 3: Cash at Closing",
            description: "Take the rebate as cash and use it for renovations, furniture, or emergency reserves.",
          },
        ],
      },
      {
        number: 3,
        title: "Get AI-Powered Analysis (TurboHome IQ)",
        intro: "Before you make an offer, we give you what traditional agents can't:",
        features: [
          {
            title: "Home Valuation Report",
            description: "Is the seller asking $800K for a $750K house? We tell you the fair market value.",
          },
          {
            title: "Property Risk Analysis",
            description: "We decode 200-page disclosure packets into plain English so you know what you're buying.",
          },
        ],
      },
    ],
  },

  calculator: {
    title: "See Your Rebate: How Much Ammo Do You Have?",
    subtitle: "Enter your home price to see how much commission we'll rebate you—and what it can do.",
    label: "Home Price",
    resultLabel: "Your TurboHome Rebate",
    benefits: [
      "Boost your offer by {rebate} to win competitive bids",
      "Buy down your mortgage rate and save ~$750/month",
      "Take cash at closing for reserves or renovations",
    ],
    cta: { text: "Get Started with TurboHome", href: "https://turbohome.com" },
    flatFee: 4000,
    commissionRate: 0.03,
  },

  socialProof: {
    title: "Real Buyers. Real Problems Solved.",
    testimonials: [
      {
        quote: "I was losing every offer in the Bay Area. TurboHome gave me an extra $23,000 in buying power—and that's what helped me win the deal.",
        author: "Arnab",
        location: "San Francisco Bay Area",
        badge: { text: "Won Competitive Offer", color: "green", icon: "✓" },
      },
      {
        quote: "I used my rebate to buy down my mortgage to 4.8% in the first year. I'm saving $800/month compared to the standard rate. That's $9,600 a year back in my pocket.",
        author: "Jennifer",
        location: "Texas",
        badge: { text: "Lowered Mortgage", color: "gold", icon: "💰" },
      },
      {
        quote: "I got $82,000 at closing. Instead of my agent pocketing it, I used it to renovate the kitchen and build an emergency fund. Best decision I made.",
        author: "Jeff",
        location: "Southern California",
        badge: { text: "Cash at Closing", color: "blue", icon: "$" },
      },
      {
        quote: "I like the business model of TurboHome. The whole process was extremely easy and I felt a lot more comfortable working with them (no pressure) than a traditional agent.",
        author: "Tiffany Peng",
        location: "California",
        badge: { text: "Full-Service", color: "gold", icon: "⭐" },
      },
    ],
  },

  comparison: {
    title: "\"But Don't Cheap Agents Give Worse Service?\"",
    subtitle: "Fair question. Here's why TurboHome is different from discount brokers:",
    headers: ["Feature", "Traditional Agent", "Discount Broker", "TurboHome"],
    rows: [
      {
        feature: "Full-service support",
        traditional: { value: "Yes", status: "good" },
        discount: { value: "Minimal", status: "bad" },
        turbo: { value: "Yes", status: "good" },
      },
      {
        feature: "Licensed agents",
        traditional: { value: "Yes", status: "good" },
        discount: { value: "Hit or miss", status: "warning" },
        turbo: { value: "In-house team", status: "good" },
      },
      {
        feature: "AI-powered analysis",
        traditional: { value: "No", status: "bad" },
        discount: { value: "No", status: "bad" },
        turbo: { value: "TurboHome IQ", status: "good" },
      },
      {
        feature: "Commission rebate",
        traditional: { value: "They keep it", status: "bad" },
        discount: { value: "Yes", status: "good" },
        turbo: { value: "Yes", status: "good" },
      },
      {
        feature: "Cost",
        traditional: { value: "2.5-3% ($20K-30K)", status: "neutral" },
        discount: { value: "1-1.5% ($8K-12K)", status: "neutral" },
        turbo: { value: "Flat fee + rebate", status: "highlight" },
      },
    ],
    differenceTitle: "THE TURBOHOME DIFFERENCE:",
    differenceText: "We're not cutting service to cut costs. We're using technology and in-house efficiency to deliver traditional agent quality at a fraction of the price. You get licensed agents, full support, AI-powered analysis, and a rebate you can weaponize.",
  },

  turboIQ: {
    title: "TurboHome IQ: AI-Powered Analysis, Reviewed by Experts",
    subtitle: "Before you make an offer, get the analysis traditional agents don't have time to do.",
    features: [
      {
        icon: "📊",
        title: "Home Valuation Report",
        description: "Make informed offers with TurboHome's free Home Valuation Report. We use advanced comps analysis, local expertise, and deep market insights to deliver an unbiased evaluation of a property's fair market value.",
        highlight: "Is the seller asking $800K for a house worth $750K? You'll know before you make an offer.",
      },
      {
        icon: "🛡️",
        title: "Property Risk Analysis",
        description: "Decoding disclosure packets, inspection reports, and HOA docs can be hundreds of pages. Our AI-powered risk analysis reads every page, flags red flags, and translates it into plain English.",
        highlight: "Stop buying blind. Start buying informed.",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How is TurboHome different from a traditional buyer's agent?",
        answer: "Traditional agents charge 2.5-3% commission ($20K-30K) and keep it all. TurboHome takes a low flat fee and rebates you the rest—so you can use it to boost your offer, buy down your rate, or take cash at closing.",
      },
      {
        question: "How does TurboHome's cash back work?",
        answer: "After closing, we rebate you the difference between the standard buyer's agent commission and our flat fee. Example: On an $800K home—Standard commission: $24,000 (3%), TurboHome flat fee: $4,000, Your rebate: $20,000.",
      },
      {
        question: "Is TurboHome a licensed broker?",
        answer: "Yes. TurboHome is a fully licensed real estate brokerage—California: CalDRE #02292670, Texas: TREC #744106. All our agents are licensed, insured, and in-house employees.",
      },
      {
        question: "Where does TurboHome operate?",
        answer: "We currently operate in California (Northern & Southern) and Texas (Austin, Dallas, Houston). Expanding to more markets in 2025.",
      },
      {
        question: "How is this even possible? What's the catch?",
        answer: "No catch. Just better economics. Traditional brokerages have expensive offices, large marketing budgets, and contractor agents. TurboHome has in-house agents (W2 employees), remote-first operations, and technology that automates time-consuming tasks. We pass the savings to you.",
      },
    ],
  },

  finalCta: {
    title: "Stop Giving Away $30,000. Start Using It to Win.",
    subtitle: "Calculate your rebate, meet your agent, and see how TurboHome helps you win offers, lower your rate, and buy with confidence.",
    primary: { text: "Calculate My Rebate", href: "#calculator" },
    secondary: { text: "Schedule a Call", href: "https://turbohome.com" },
  },
};

export type Content = typeof content;
