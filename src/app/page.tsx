"use client";

import { useState } from "react";

export default function Home() {
  const [homePrice, setHomePrice] = useState(800000);
  const rebate = Math.round(homePrice * 0.03 - 4000);

  return (
    <main className="min-h-screen bg-th-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-th-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-th-slate-900 font-[family-name:var(--font-display)]">
            TurboHome
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-th-slate-600">
            <a href="#how-it-works" className="hover:text-th-cyan transition-colors">How It Works</a>
            <a href="#calculator" className="hover:text-th-cyan transition-colors">Calculator</a>
            <a href="#faq" className="hover:text-th-cyan transition-colors">FAQ</a>
          </div>
          <a href="https://turbohome.com" className="btn-primary text-sm py-2 px-4">
            <span>Get Started</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-gradient"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-th-cyan/10 text-th-cyan text-sm font-medium rounded-full mb-6">
                Top 50 AI Startups in Real Estate
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-th-slate-900 leading-[1.05] mb-6 animate-fade-in-up delay-100">
              Stop Losing
              <span className="gradient-text"> $30,000</span>
              <br />to Your Agent
            </h1>
            <p className="text-xl md:text-2xl text-th-slate-600 mb-10 max-w-2xl animate-fade-in-up delay-200 leading-relaxed">
              TurboHome turns your agent&apos;s commission into weapons you actually need:
              <strong className="text-th-slate-800"> offer power</strong>,
              <strong className="text-th-slate-800"> rate buydowns</strong>, and
              <strong className="text-th-slate-800"> AI-powered analysis</strong>.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-300">
              <a href="#calculator" className="btn-primary">
                <span>Calculate Your Rebate</span>
              </a>
              <a href="#how-it-works" className="btn-secondary">How It Works</a>
            </div>
            <div className="animate-fade-in-up delay-400">
              <p className="text-sm text-th-slate-500 mb-3">As featured in</p>
              <div className="flex flex-wrap gap-6 text-th-slate-400 text-sm font-medium">
                <span>Mercury News</span>
                <span>CBS News</span>
                <span>Business Insider</span>
                <span>USA Today</span>
                <span>Fast Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Three Problems */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-th-slate-900 mb-4">
              The Three Ways Buyers Get Crushed
            </h2>
            <p className="text-lg text-th-slate-500 max-w-2xl mx-auto">
              And why your agent&apos;s commission should be solving them
            </p>
          </div>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-th-slate-50 rounded-2xl p-8 card-hover border border-th-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-th-rose/10 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-th-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-th-slate-900 mb-4">You Keep Losing Offers</h3>
                  <p className="text-th-slate-600 mb-4 leading-relaxed">
                    You&apos;re pre-approved for $800,000. You found the perfect house. You offered asking price.
                    Then someone else offered $825,000. And someone else waived contingencies.
                  </p>
                  <p className="text-th-slate-800 font-semibold mb-4">
                    Your buyer&apos;s agent is getting a $24,000 commission. That money could have been $24,000 more buying power.
                  </p>
                  <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                    <p className="text-th-cyan-dark font-medium">
                      <strong>TurboHome:</strong> We rebate you the commission so you can boost your offer by $20K-30K and actually win.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-th-slate-50 rounded-2xl p-8 card-hover border border-th-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-th-gold/10 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-th-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-th-slate-900 mb-4">Your Mortgage Payment Is Brutal</h3>
                  <p className="text-th-slate-600 mb-4 leading-relaxed">
                    You won the $800,000 house. Now you&apos;re paying $5,200/month at a 7% interest rate.
                    You could buy down your rate—but that costs $15K-30K upfront.
                  </p>
                  <p className="text-th-slate-800 font-semibold mb-4">
                    Your agent just made $24,000. That could have bought down your rate to 4.8% in year one, saving you $800/month.
                  </p>
                  <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                    <p className="text-th-cyan-dark font-medium">
                      <strong>TurboHome:</strong> We rebate you the commission so you can fund a rate buydown and save thousands yearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-th-slate-50 rounded-2xl p-8 card-hover border border-th-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-th-slate-200 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-th-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-th-slate-900 mb-4">You&apos;re Buying Blind</h3>
                  <p className="text-th-slate-600 mb-4 leading-relaxed">
                    The disclosure packet is 200 pages of dense legal language. The HOA docs mention &quot;special assessments&quot;
                    but you don&apos;t know if that&apos;s $500 or $50,000.
                  </p>
                  <p className="text-th-slate-800 font-semibold mb-4">
                    You&apos;re about to make the biggest financial decision of your life—and you have no idea if you&apos;re getting screwed.
                  </p>
                  <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                    <p className="text-th-cyan-dark font-medium">
                      <strong>TurboHome:</strong> AI-powered analysis gives you unbiased property valuation and plain-English risk breakdowns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section id="how-it-works" className="py-24 bg-th-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-th-slate-900 mb-4">
              How TurboHome Works
            </h2>
            <p className="text-lg text-th-slate-500 max-w-3xl mx-auto">
              Traditional agents take 2.5-3% ($20K-30K) and keep it all. We take a flat fee and rebate you the rest.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-th-slate-100 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-th-cyan/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-th-slate-900">Meet Your TurboHome Agent</h3>
              </div>
              <p className="text-th-slate-600 leading-relaxed">
                We match you with a licensed, in-house agent who knows your market. Our agents do everything traditional agents do:
                touring, analysis, coaching, offers, negotiations, and closing.
                <strong className="text-th-slate-800"> The difference? We don&apos;t keep the full commission. You do.</strong>
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-th-slate-100 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-th-cyan/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-th-slate-900">Choose Your Rebate Path</h3>
              </div>
              <p className="text-th-slate-600 mb-6">You decide how to use your rebate:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-th-slate-50 rounded-xl p-5 border border-th-slate-100">
                  <div className="w-10 h-10 bg-th-emerald/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-th-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-th-slate-900 mb-2">Boost Your Offer</h4>
                  <p className="text-sm text-th-slate-500">
                    Increase your purchase price by $20K-30K and win in competitive markets.
                  </p>
                </div>
                <div className="bg-th-slate-50 rounded-xl p-5 border border-th-slate-100">
                  <div className="w-10 h-10 bg-th-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-th-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-th-slate-900 mb-2">Buy Down Your Rate</h4>
                  <p className="text-sm text-th-slate-500">
                    Fund a 2-1 buydown and drop your rate to 4.8% in year one.
                  </p>
                </div>
                <div className="bg-th-slate-50 rounded-xl p-5 border border-th-slate-100">
                  <div className="w-10 h-10 bg-th-cyan/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-th-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-th-slate-900 mb-2">Cash at Closing</h4>
                  <p className="text-sm text-th-slate-500">
                    Take cash for renovations, furniture, or emergency reserves.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-th-slate-100 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-th-cyan/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-th-slate-900">Get AI-Powered Analysis</h3>
              </div>
              <p className="text-th-slate-600 mb-4">Before you make an offer, we give you what traditional agents can&apos;t:</p>
              <ul className="space-y-3 text-th-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-th-slate-800">Home Valuation Report:</strong> Is the seller asking $800K for a $750K house? We tell you the fair market value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-th-slate-800">Property Risk Analysis:</strong> We decode 200-page disclosure packets into plain English so you know what you&apos;re buying.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Calculator */}
      <section id="calculator" className="py-24 bg-th-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Calculate Your Rebate
          </h2>
          <p className="text-th-slate-400 mb-10 text-lg">
            Enter your home price to see how much commission we&apos;ll rebate you.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <label className="block text-left text-th-slate-700 font-medium mb-3">
              Home Price
            </label>
            <input
              type="range"
              min="300000"
              max="2000000"
              step="10000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full mb-4"
            />
            <div className="text-4xl font-bold text-th-slate-900 mb-8 number-display">
              ${homePrice.toLocaleString()}
            </div>

            <div className="bg-gradient-to-br from-th-slate-50 to-th-slate-100 rounded-xl p-6 mb-6 border border-th-slate-200">
              <div className="text-sm text-th-slate-500 mb-2 font-medium">Your TurboHome Rebate</div>
              <div className="text-5xl font-bold gradient-text mb-6 number-display">
                ${rebate.toLocaleString()}
              </div>
              <div className="text-left space-y-3 text-sm text-th-slate-600">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-th-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Boost your offer by ${rebate.toLocaleString()} to win competitive bids
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-th-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Buy down your mortgage rate and save ~$750/month
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-th-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Take cash at closing for reserves or renovations
                </p>
              </div>
            </div>

            <a href="https://turbohome.com" className="btn-primary inline-block w-full">
              <span>Get Started with TurboHome</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-th-slate-900 text-center mb-12">
            Real Buyers. Real Savings.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-th-slate-50 rounded-2xl p-6 card-hover border border-th-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-th-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-th-slate-700 mb-4 italic leading-relaxed">
                &quot;I was losing every offer in the Bay Area. TurboHome gave me an extra $23,000 in buying power—and that&apos;s what helped me win the deal.&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-th-slate-900">Arnab</div>
                  <div className="text-sm text-th-slate-500">San Francisco Bay Area</div>
                </div>
                <span className="text-xs bg-th-emerald/10 text-th-emerald px-3 py-1.5 rounded-full font-medium">Won Competitive Offer</span>
              </div>
            </div>

            <div className="bg-th-slate-50 rounded-2xl p-6 card-hover border border-th-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-th-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-th-slate-700 mb-4 italic leading-relaxed">
                &quot;I used my rebate to buy down my mortgage to 4.8% in the first year. I&apos;m saving $800/month compared to the standard rate.&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-th-slate-900">Jennifer</div>
                  <div className="text-sm text-th-slate-500">Texas</div>
                </div>
                <span className="text-xs bg-th-gold/10 text-th-gold-dark px-3 py-1.5 rounded-full font-medium">Lowered Mortgage</span>
              </div>
            </div>

            <div className="bg-th-slate-50 rounded-2xl p-6 card-hover border border-th-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-th-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-th-slate-700 mb-4 italic leading-relaxed">
                &quot;I got $82,000 at closing. Instead of my agent pocketing it, I used it to renovate the kitchen and build an emergency fund.&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-th-slate-900">Jeff</div>
                  <div className="text-sm text-th-slate-500">Southern California</div>
                </div>
                <span className="text-xs bg-th-cyan/10 text-th-cyan px-3 py-1.5 rounded-full font-medium">Cash at Closing</span>
              </div>
            </div>

            <div className="bg-th-slate-50 rounded-2xl p-6 card-hover border border-th-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-th-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-th-slate-700 mb-4 italic leading-relaxed">
                &quot;The whole process was extremely easy and I felt a lot more comfortable working with them than a traditional agent.&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-th-slate-900">Tiffany Peng</div>
                  <div className="text-sm text-th-slate-500">California</div>
                </div>
                <span className="text-xs bg-th-slate-200 text-th-slate-700 px-3 py-1.5 rounded-full font-medium">Full-Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-24 bg-th-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-th-slate-900 mb-4">
              Why Not Just Use a Discount Broker?
            </h2>
            <p className="text-lg text-th-slate-500">
              Here&apos;s why TurboHome is different
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-th-slate-100">
              <thead>
                <tr className="bg-th-slate-100">
                  <th className="text-left p-5 font-semibold text-th-slate-900">Feature</th>
                  <th className="text-center p-5 font-semibold text-th-slate-900">Traditional Agent</th>
                  <th className="text-center p-5 font-semibold text-th-slate-900">Discount Broker</th>
                  <th className="text-center p-5 font-semibold text-th-cyan">TurboHome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-th-slate-100">
                  <td className="p-5 text-th-slate-700">Full-service support</td>
                  <td className="p-5 text-center text-th-emerald">✓ Yes</td>
                  <td className="p-5 text-center text-th-rose">✗ Minimal</td>
                  <td className="p-5 text-center text-th-emerald font-semibold">✓ Yes</td>
                </tr>
                <tr className="border-t border-th-slate-100 bg-th-slate-50">
                  <td className="p-5 text-th-slate-700">Licensed agents</td>
                  <td className="p-5 text-center text-th-emerald">✓ Yes</td>
                  <td className="p-5 text-center text-th-gold-dark">⚠ Hit or miss</td>
                  <td className="p-5 text-center text-th-emerald font-semibold">✓ In-house team</td>
                </tr>
                <tr className="border-t border-th-slate-100">
                  <td className="p-5 text-th-slate-700">AI-powered analysis</td>
                  <td className="p-5 text-center text-th-rose">✗ No</td>
                  <td className="p-5 text-center text-th-rose">✗ No</td>
                  <td className="p-5 text-center text-th-emerald font-semibold">✓ TurboHome IQ</td>
                </tr>
                <tr className="border-t border-th-slate-100 bg-th-slate-50">
                  <td className="p-5 text-th-slate-700">Commission rebate</td>
                  <td className="p-5 text-center text-th-rose">✗ They keep it</td>
                  <td className="p-5 text-center text-th-emerald">✓ Yes</td>
                  <td className="p-5 text-center text-th-emerald font-semibold">✓ Yes</td>
                </tr>
                <tr className="border-t border-th-slate-100">
                  <td className="p-5 text-th-slate-700">Cost</td>
                  <td className="p-5 text-center text-th-slate-600">2.5-3% ($20K-30K)</td>
                  <td className="p-5 text-center text-th-slate-600">1-1.5% ($8K-12K)</td>
                  <td className="p-5 text-center text-th-cyan font-semibold">Flat fee + rebate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-th-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-th-slate-50 rounded-xl p-6 border border-th-slate-100">
              <h3 className="font-bold text-th-slate-900 mb-3">How is TurboHome different from a traditional buyer&apos;s agent?</h3>
              <p className="text-th-slate-600 leading-relaxed">
                Traditional agents charge 2.5-3% commission ($20K-30K) and keep it all. TurboHome takes a low flat fee and rebates you the rest—so you can use it to boost your offer, buy down your rate, or take cash at closing.
              </p>
            </div>

            <div className="bg-th-slate-50 rounded-xl p-6 border border-th-slate-100">
              <h3 className="font-bold text-th-slate-900 mb-3">How does the cash back work?</h3>
              <p className="text-th-slate-600 leading-relaxed">
                After closing, we rebate you the difference between the standard commission and our flat fee. Example: On an $800K home—Standard commission: $24,000 (3%), TurboHome flat fee: $4,000, Your rebate: $20,000.
              </p>
            </div>

            <div className="bg-th-slate-50 rounded-xl p-6 border border-th-slate-100">
              <h3 className="font-bold text-th-slate-900 mb-3">Is TurboHome a licensed broker?</h3>
              <p className="text-th-slate-600 leading-relaxed">
                Yes. TurboHome is fully licensed—California: CalDRE #02292670, Texas: TREC #744106. All our agents are licensed, insured, and W2 employees.
              </p>
            </div>

            <div className="bg-th-slate-50 rounded-xl p-6 border border-th-slate-100">
              <h3 className="font-bold text-th-slate-900 mb-3">Where does TurboHome operate?</h3>
              <p className="text-th-slate-600 leading-relaxed">
                We currently operate in California (Northern &amp; Southern) and Texas (Austin, Dallas, Houston). Expanding to more markets in 2025.
              </p>
            </div>

            <div className="bg-th-slate-50 rounded-xl p-6 border border-th-slate-100">
              <h3 className="font-bold text-th-slate-900 mb-3">What&apos;s the catch?</h3>
              <p className="text-th-slate-600 leading-relaxed">
                No catch. Just better economics. Traditional brokerages have expensive offices and contractor agents. TurboHome has in-house agents (W2 employees), remote-first operations, and AI that automates time-consuming tasks. We pass the savings to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-th-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Giving Away $30,000
          </h2>
          <p className="text-xl text-th-slate-400 mb-10 max-w-2xl mx-auto">
            Calculate your rebate, meet your agent, and see how TurboHome helps you win offers, lower your rate, and buy with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#calculator" className="bg-white text-th-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-th-slate-100 transition-all duration-300 shadow-lg">
              Calculate My Rebate
            </a>
            <a href="https://turbohome.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-th-slate-900 transition-all duration-300">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-th-slate-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-bold text-xl mb-4 font-[family-name:var(--font-display)]">TurboHome</h3>
              <p className="text-th-slate-400 text-sm max-w-sm leading-relaxed">
                The smartest way to buy a home. Full-service agents, AI-powered analysis, and thousands back in your pocket.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-th-slate-400 text-sm">
                <p>(510) 391-5392</p>
                <p>hello@turbohome.com</p>
                <p>Mon - Fri, 9 AM - 6 PM PST</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Licensing</h3>
              <div className="space-y-2 text-th-slate-400 text-sm">
                <p>CalDRE #02292670</p>
                <p>TREC #744106</p>
              </div>
            </div>
          </div>
          <div className="border-t border-th-slate-800 pt-8 text-center text-sm text-th-slate-500">
            © {new Date().getFullYear()} TurboHome. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
