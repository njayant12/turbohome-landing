"use client";

import { useState } from "react";

export default function Home() {
  const [homePrice, setHomePrice] = useState(800000);
  const rebate = Math.round(homePrice * 0.03 - 4000);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-turbo-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-turbo-gray-900 leading-tight mb-6">
              You're Losing Offers, Drowning in Mortgage Payments, and Buying Blind.
            </h1>
            <p className="text-xl text-turbo-gray-700 mb-8">
              TurboHome fixes all three—by turning your agent's $30,000 commission into weapons you actually need: offer power, rate buydowns, and unbiased analysis.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#calculator" className="btn-primary">Calculate Your Rebate</a>
              <a href="#how-it-works" className="btn-secondary">How It Works</a>
            </div>
            <div className="text-sm text-turbo-gray-500">
              As seen in: Mercury News • CBS News • Business Insider • USA Today • Fast Company
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Three Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 mb-4">
              The Three Ways Homebuyers Get Crushed
            </h2>
            <p className="text-lg text-turbo-gray-600">
              (And Why Your Agent Commission Should Be Solving Them)
            </p>
          </div>

          <div className="space-y-8">
            {/* Problem 1 */}
            <div className="bg-turbo-gray-50 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠❌</div>
                <div>
                  <h3 className="text-2xl font-bold text-turbo-gray-900 mb-4">You Keep Losing Offers</h3>
                  <p className="text-turbo-gray-700 mb-4">
                    You're pre-approved for $800,000. You found the perfect house. You offered asking price.
                  </p>
                  <p className="text-turbo-gray-700 mb-4">
                    Then someone else offered $825,000. And someone else waived contingencies.
                  </p>
                  <p className="text-turbo-gray-700 mb-4">
                    Your agent says "the market is just competitive." But here's what they don't tell you:
                  </p>
                  <p className="text-turbo-gray-900 font-semibold mb-4">
                    Your buyer's agent is getting a $24,000 commission on this deal. That money could have been $24,000 more buying power to win the offer.
                  </p>
                  <div className="bg-turbo-blue/10 border border-turbo-blue/20 rounded-lg p-4">
                    <p className="text-turbo-blue font-medium">
                      <strong>The TurboHome Solution:</strong> We rebate you the commission so you can boost your offer by $20K-30K and actually win in competitive markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-turbo-gray-50 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📈💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-turbo-gray-900 mb-4">Your Mortgage Payment Is Brutal</h3>
                  <p className="text-turbo-gray-700 mb-4">
                    You won the $800,000 house. Congrats. Now you're paying $5,200/month at a 7% interest rate. That's $62,400 per year just in mortgage payments.
                  </p>
                  <p className="text-turbo-gray-700 mb-4">
                    You could buy down your rate now—but that costs $15K-30K upfront. Money you don't have after the down payment.
                  </p>
                  <p className="text-turbo-gray-900 font-semibold mb-4">
                    Here's the brutal math: Your agent just made $24,000. That could have bought down your rate to 4.8% in year one, saving you $800/month ($9,600/year).
                  </p>
                  <div className="bg-turbo-blue/10 border border-turbo-blue/20 rounded-lg p-4">
                    <p className="text-turbo-blue font-medium">
                      <strong>The TurboHome Solution:</strong> We rebate you the commission so you can fund a rate buydown and stop hemorrhaging money every month.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-turbo-gray-50 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📄❓</div>
                <div>
                  <h3 className="text-2xl font-bold text-turbo-gray-900 mb-4">You're Buying Blind</h3>
                  <p className="text-turbo-gray-700 mb-4">
                    The disclosure packet is 200 pages of dense legal language. The HOA docs mention "special assessments" but you don't know if that's $500 or $50,000.
                  </p>
                  <p className="text-turbo-gray-700 mb-4">
                    Your agent says "looks good to me" because they have 8 other clients and don't have time for deep analysis.
                  </p>
                  <p className="text-turbo-gray-900 font-semibold mb-4">
                    You're about to make the biggest financial decision of your life—and you have no idea if you're getting screwed.
                  </p>
                  <div className="bg-turbo-blue/10 border border-turbo-blue/20 rounded-lg p-4">
                    <p className="text-turbo-blue font-medium">
                      <strong>The TurboHome Solution:</strong> We use AI-powered analysis to give you unbiased property valuation, risk analysis of disclosures, and clear plain-English breakdowns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section id="how-it-works" className="py-20 bg-turbo-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 mb-4">
              Here's How: We Convert Your Agent Commission Into Solving These Problems
            </h2>
            <p className="text-lg text-turbo-gray-600 max-w-3xl mx-auto">
              Traditional agents take a 2.5-3% commission ($20K-30K on most homes) and give you nothing in return. TurboHome takes a low flat fee and rebates you the rest.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-turbo-blue rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-bold text-turbo-gray-900">Meet Your TurboHome Agent</h3>
              </div>
              <p className="text-turbo-gray-700">
                We match you with a licensed, in-house agent who knows your market inside and out. Unlike discount brokers who cut service to cut costs, our agents do everything a traditional agent does: touring, analysis, coaching, offers, negotiations, and closing. <strong>The difference? We don't keep the full commission. You do.</strong>
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-turbo-blue rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-turbo-gray-900">Choose Your Rebate Path</h3>
              </div>
              <p className="text-turbo-gray-700 mb-6">You decide how to weaponize your rebate:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-turbo-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-turbo-gray-900 mb-2">Path 1: Boost Your Offer</h4>
                  <p className="text-sm text-turbo-gray-600">
                    Use the rebate to increase your purchase price by $20K-30K and win in competitive markets.
                  </p>
                </div>
                <div className="bg-turbo-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-turbo-gray-900 mb-2">Path 2: Buy Down Your Rate</h4>
                  <p className="text-sm text-turbo-gray-600">
                    Use the rebate to fund a 2-1 mortgage buydown, dropping your rate to 4.8% in year one.
                  </p>
                </div>
                <div className="bg-turbo-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-turbo-gray-900 mb-2">Path 3: Cash at Closing</h4>
                  <p className="text-sm text-turbo-gray-600">
                    Take the rebate as cash and use it for renovations, furniture, or emergency reserves.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-turbo-blue rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-bold text-turbo-gray-900">Get AI-Powered Analysis (TurboHome IQ)</h3>
              </div>
              <p className="text-turbo-gray-700 mb-4">Before you make an offer, we give you what traditional agents can't:</p>
              <ul className="space-y-2 text-turbo-gray-700">
                <li><strong>Home Valuation Report:</strong> Is the seller asking $800K for a $750K house? We tell you the fair market value.</li>
                <li><strong>Property Risk Analysis:</strong> We decode 200-page disclosure packets into plain English so you know what you're buying.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Calculator */}
      <section id="calculator" className="py-20 bg-turbo-blue">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Your Rebate: How Much Ammo Do You Have?
          </h2>
          <p className="text-turbo-blue-light mb-8">
            Enter your home price to see how much commission we'll rebate you—and what it can do.
          </p>

          <div className="bg-white rounded-xl p-8">
            <label className="block text-left text-turbo-gray-700 font-medium mb-2">
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
            <div className="text-3xl font-bold text-turbo-gray-900 mb-6">
              ${homePrice.toLocaleString()}
            </div>

            <div className="bg-turbo-gray-50 rounded-lg p-6 mb-6">
              <div className="text-sm text-turbo-gray-500 mb-2">Your TurboHome Rebate</div>
              <div className="text-4xl font-bold text-turbo-blue mb-4">
                ${rebate.toLocaleString()}
              </div>
              <div className="text-left space-y-2 text-sm text-turbo-gray-700">
                <p>✓ Boost your offer by ${rebate.toLocaleString()} to win competitive bids</p>
                <p>✓ Buy down your mortgage rate and save ~$750/month</p>
                <p>✓ Take cash at closing for reserves or renovations</p>
              </div>
            </div>

            <a href="https://turbohome.com" className="btn-primary inline-block">
              Get Started with TurboHome
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 text-center mb-12">
            Real Buyers. Real Problems Solved.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-turbo-gray-50 rounded-xl p-6">
              <p className="text-turbo-gray-700 mb-4 italic">
                "I was losing every offer in the Bay Area. TurboHome gave me an extra $23,000 in buying power—and that's what helped me win the deal."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-turbo-gray-900">Arnab</div>
                  <div className="text-sm text-turbo-gray-500">San Francisco Bay Area</div>
                </div>
                <span className="text-xs bg-turbo-green/10 text-turbo-green px-2 py-1 rounded">✓ Won Competitive Offer</span>
              </div>
            </div>

            <div className="bg-turbo-gray-50 rounded-xl p-6">
              <p className="text-turbo-gray-700 mb-4 italic">
                "I used my rebate to buy down my mortgage to 4.8% in the first year. I'm saving $800/month compared to the standard rate. That's $9,600 a year back in my pocket."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-turbo-gray-900">Jennifer</div>
                  <div className="text-sm text-turbo-gray-500">Texas</div>
                </div>
                <span className="text-xs bg-turbo-gold/10 text-turbo-gold px-2 py-1 rounded">💰 Lowered Mortgage</span>
              </div>
            </div>

            <div className="bg-turbo-gray-50 rounded-xl p-6">
              <p className="text-turbo-gray-700 mb-4 italic">
                "I got $82,000 at closing. Instead of my agent pocketing it, I used it to renovate the kitchen and build an emergency fund. Best decision I made."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-turbo-gray-900">Jeff</div>
                  <div className="text-sm text-turbo-gray-500">Southern California</div>
                </div>
                <span className="text-xs bg-turbo-blue/10 text-turbo-blue px-2 py-1 rounded">$ Cash at Closing</span>
              </div>
            </div>

            <div className="bg-turbo-gray-50 rounded-xl p-6">
              <p className="text-turbo-gray-700 mb-4 italic">
                "I like the business model of TurboHome. The whole process was extremely easy and I felt a lot more comfortable working with them (no pressure) than a traditional agent."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-turbo-gray-900">Tiffany Peng</div>
                  <div className="text-sm text-turbo-gray-500">California</div>
                </div>
                <span className="text-xs bg-turbo-gold/10 text-turbo-gold px-2 py-1 rounded">⭐ Full-Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-20 bg-turbo-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 mb-4">
              "But Don't Cheap Agents Give Worse Service?"
            </h2>
            <p className="text-lg text-turbo-gray-600">
              Fair question. Here's why TurboHome is different from discount brokers:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-turbo-gray-100">
                  <th className="text-left p-4 font-semibold text-turbo-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-turbo-gray-900">Traditional Agent</th>
                  <th className="text-center p-4 font-semibold text-turbo-gray-900">Discount Broker</th>
                  <th className="text-center p-4 font-semibold text-turbo-blue">TurboHome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 text-turbo-gray-700">Full-service support</td>
                  <td className="p-4 text-center text-turbo-green">✓ Yes</td>
                  <td className="p-4 text-center text-turbo-red">✗ Minimal</td>
                  <td className="p-4 text-center text-turbo-green font-semibold">✓ Yes</td>
                </tr>
                <tr className="border-t bg-turbo-gray-50">
                  <td className="p-4 text-turbo-gray-700">Licensed agents</td>
                  <td className="p-4 text-center text-turbo-green">✓ Yes</td>
                  <td className="p-4 text-center text-turbo-gold">⚠ Hit or miss</td>
                  <td className="p-4 text-center text-turbo-green font-semibold">✓ In-house team</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-turbo-gray-700">AI-powered analysis</td>
                  <td className="p-4 text-center text-turbo-red">✗ No</td>
                  <td className="p-4 text-center text-turbo-red">✗ No</td>
                  <td className="p-4 text-center text-turbo-green font-semibold">✓ TurboHome IQ</td>
                </tr>
                <tr className="border-t bg-turbo-gray-50">
                  <td className="p-4 text-turbo-gray-700">Commission rebate</td>
                  <td className="p-4 text-center text-turbo-red">✗ They keep it</td>
                  <td className="p-4 text-center text-turbo-green">✓ Yes</td>
                  <td className="p-4 text-center text-turbo-green font-semibold">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-turbo-gray-700">Cost</td>
                  <td className="p-4 text-center text-turbo-gray-700">2.5-3% ($20K-30K)</td>
                  <td className="p-4 text-center text-turbo-gray-700">1-1.5% ($8K-12K)</td>
                  <td className="p-4 text-center text-turbo-blue font-semibold">Flat fee + rebate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="font-bold text-turbo-gray-900 mb-4">THE TURBOHOME DIFFERENCE:</h3>
            <p className="text-turbo-gray-700">
              We're not cutting service to cut costs. We're using technology and in-house efficiency to deliver traditional agent quality at a fraction of the price. You get licensed agents, full support, AI-powered analysis, and a rebate you can weaponize.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: TurboHome IQ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 mb-4">
              TurboHome IQ: AI-Powered Analysis, Reviewed by Experts
            </h2>
            <p className="text-lg text-turbo-gray-600">
              Before you make an offer, get the analysis traditional agents don't have time to do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-turbo-gray-50 rounded-xl p-8">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-turbo-gray-900 mb-4">Home Valuation Report</h3>
              <p className="text-turbo-gray-700 mb-4">
                Make informed offers with TurboHome's free Home Valuation Report. We use advanced comps analysis, local expertise, and deep market insights to deliver an unbiased evaluation of a property's fair market value.
              </p>
              <p className="text-turbo-gray-900 font-semibold">
                Is the seller asking $800K for a house worth $750K? You'll know before you make an offer.
              </p>
            </div>

            <div className="bg-turbo-gray-50 rounded-xl p-8">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-turbo-gray-900 mb-4">Property Risk Analysis</h3>
              <p className="text-turbo-gray-700 mb-4">
                Decoding disclosure packets, inspection reports, and HOA docs can be hundreds of pages. Our AI-powered risk analysis reads every page, flags red flags, and translates it into plain English.
              </p>
              <p className="text-turbo-gray-900 font-semibold">
                Stop buying blind. Start buying informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-20 bg-turbo-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-turbo-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-turbo-gray-900 mb-2">How is TurboHome different from a traditional buyer's agent?</h3>
              <p className="text-turbo-gray-700">
                Traditional agents charge 2.5-3% commission ($20K-30K) and keep it all. TurboHome takes a low flat fee and rebates you the rest—so you can use it to boost your offer, buy down your rate, or take cash at closing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-turbo-gray-900 mb-2">How does TurboHome's cash back work?</h3>
              <p className="text-turbo-gray-700">
                After closing, we rebate you the difference between the standard buyer's agent commission and our flat fee. Example: On an $800K home—Standard commission: $24,000 (3%), TurboHome flat fee: $4,000, Your rebate: $20,000.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-turbo-gray-900 mb-2">Is TurboHome a licensed broker?</h3>
              <p className="text-turbo-gray-700">
                Yes. TurboHome is a fully licensed real estate brokerage—California: CalDRE #02292670, Texas: TREC #744106. All our agents are licensed, insured, and in-house employees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-turbo-gray-900 mb-2">Where does TurboHome operate?</h3>
              <p className="text-turbo-gray-700">
                We currently operate in California (Northern & Southern) and Texas (Austin, Dallas, Houston). Expanding to more markets in 2025.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-turbo-gray-900 mb-2">How is this even possible? What's the catch?</h3>
              <p className="text-turbo-gray-700">
                No catch. Just better economics. Traditional brokerages have expensive offices, large marketing budgets, and contractor agents. TurboHome has in-house agents (W2 employees), remote-first operations, and technology that automates time-consuming tasks. We pass the savings to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="py-20 bg-turbo-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Giving Away $30,000. Start Using It to Win.
          </h2>
          <p className="text-xl text-turbo-blue-light mb-8">
            Calculate your rebate, meet your agent, and see how TurboHome helps you win offers, lower your rate, and buy with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#calculator" className="bg-white text-turbo-blue px-8 py-4 rounded-lg font-bold hover:bg-turbo-gray-100 transition">
              Calculate My Rebate
            </a>
            <a href="https://turbohome.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-turbo-blue transition">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-turbo-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TurboHome</h3>
              <p className="text-turbo-gray-300 text-sm">The smartest way to buy a home.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-turbo-gray-300 text-sm">(510) 391-5392</p>
              <p className="text-turbo-gray-300 text-sm">hello@turbohome.com</p>
              <p className="text-turbo-gray-300 text-sm">Mon - Fri, 9 AM - 6 PM PST</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Licensing</h3>
              <p className="text-turbo-gray-300 text-sm">CalDRE #02292670</p>
              <p className="text-turbo-gray-300 text-sm">TREC #744106</p>
            </div>
          </div>
          <div className="border-t border-turbo-gray-700 pt-8 text-center text-sm text-turbo-gray-400">
            © {new Date().getFullYear()} TurboHome. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
