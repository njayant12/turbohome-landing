export default function EmailCourse() {
  return (
    <main className="min-h-screen bg-th-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-th-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-th-slate-900 font-[family-name:var(--font-display)]">
            TurboHome
          </a>
          <a href="/" className="text-sm text-th-slate-600 hover:text-th-cyan transition-colors">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-th-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-th-cyan/20 text-th-cyan text-sm font-medium rounded-full mb-6">
            5-Day Email Course
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            The Home Buyer&apos;s Commission Advantage
          </h1>
          <p className="text-xl text-th-slate-400 max-w-2xl mx-auto">
            How to Win Bidding Wars and Save $25,000+ on Your Next Home
          </p>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="py-16 bg-white border-b border-th-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-th-slate-900 mb-8">Course Objectives</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-th-slate-900 mb-4">What buyers will learn:</h3>
              <ul className="space-y-3 text-th-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-th-cyan mt-1">1.</span>
                  <span>How agent compensation actually works (and why they&apos;re paying it, not sellers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-th-cyan mt-1">2.</span>
                  <span>The hidden cost of traditional commission structures in competitive markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-th-cyan mt-1">3.</span>
                  <span>How to make offers more attractive WITHOUT paying more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-th-cyan mt-1">4.</span>
                  <span>The mechanics of commission rebates and how to use them strategically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-th-cyan mt-1">5.</span>
                  <span>Why sellers accept lower offers from TurboHome buyers</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-th-slate-900 mb-4">What buyers will do:</h3>
              <ul className="space-y-3 text-th-slate-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-th-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Book a consultation to calculate their potential rebate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-th-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Understand their competitive advantage in bidding situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-th-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Feel confident they&apos;re not leaving $20K+ on the table</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Day Navigation */}
      <section className="py-8 bg-th-slate-50 border-b border-th-slate-200 sticky top-[73px] z-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="#day1" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-th-slate-700 hover:bg-th-cyan hover:text-white transition-colors border border-th-slate-200">Day 1</a>
            <a href="#day2" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-th-slate-700 hover:bg-th-cyan hover:text-white transition-colors border border-th-slate-200">Day 2</a>
            <a href="#day3" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-th-slate-700 hover:bg-th-cyan hover:text-white transition-colors border border-th-slate-200">Day 3</a>
            <a href="#day4" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-th-slate-700 hover:bg-th-cyan hover:text-white transition-colors border border-th-slate-200">Day 4</a>
            <a href="#day5" className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-th-slate-700 hover:bg-th-cyan hover:text-white transition-colors border border-th-slate-200">Day 5</a>
          </div>
        </div>
      </section>

      {/* Email Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* DAY 1 */}
          <article id="day1" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-th-cyan/30">
                1
              </span>
              <div>
                <p className="text-sm text-th-slate-500 font-medium">Day 1</p>
                <h2 className="text-2xl font-bold text-th-slate-900">Why Your $20K Over Asking Offer Just Lost</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-th-slate-200 overflow-hidden">
              <div className="bg-th-slate-100 px-6 py-4 border-b border-th-slate-200">
                <p className="text-sm text-th-slate-500">Subject Line:</p>
                <p className="font-semibold text-th-slate-900">&quot;You offered $20K over asking. You lost anyway. Here&apos;s why.&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-th-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Hook:</h3>
                  <p>In the Bay Area, 42% of home buyers lose bidding wars despite offering over asking price. The winner? Often someone who offered LESS money.</p>
                  <p className="mt-2">Here&apos;s the counterintuitive reason why.</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Pain Points Addressed:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Losing offers in competitive markets despite strong financials</li>
                    <li>Feeling powerless in bidding wars</li>
                    <li>Not understanding why sellers reject higher offers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Core Education:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Sellers care about 3 things (in order): certainty of close, net proceeds, price</li>
                    <li>A $1M offer with 3% buyer commission = seller nets $970K</li>
                    <li>A $985K offer with NO buyer commission = seller nets $985K</li>
                    <li>Lower offer wins because seller gets $15K more</li>
                  </ul>
                </div>

                <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                  <h3 className="font-bold text-th-cyan-dark mb-2">The Revelation:</h3>
                  <p className="text-th-slate-700 italic">
                    &quot;You&apos;re not just competing on price. You&apos;re competing on the seller&apos;s actual take-home number. And most buyers don&apos;t even know this is part of the equation.&quot;
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Emotional Hook:</h3>
                  <p>Picture this: You stretch your budget by $20K. You lose sleep wondering if you offered enough. Then someone offering LESS than you gets the house.</p>
                  <p className="mt-2">That&apos;s what happens when you don&apos;t understand the economics sellers actually see.</p>
                </div>

                <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                  <p className="font-semibold text-th-slate-900">CTA:</p>
                  <p className="text-th-slate-600">&quot;Tomorrow: The $12K-$82K you&apos;re paying that you probably didn&apos;t know you could negotiate&quot;</p>
                  <p className="mt-2 text-th-cyan font-medium">[Calculate your potential rebate] → Takes them to a simple calculator</p>
                </div>
              </div>
            </div>
          </article>

          {/* DAY 2 */}
          <article id="day2" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-th-cyan/30">
                2
              </span>
              <div>
                <p className="text-sm text-th-slate-500 font-medium">Day 2</p>
                <h2 className="text-2xl font-bold text-th-slate-900">The Agent Commission Secret That Changes Everything</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-th-slate-200 overflow-hidden">
              <div className="bg-th-slate-100 px-6 py-4 border-b border-th-slate-200">
                <p className="text-sm text-th-slate-500">Subject Line:</p>
                <p className="font-semibold text-th-slate-900">&quot;That 2.5% &apos;seller pays&apos;? You&apos;re actually paying it. Here&apos;s the math.&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-th-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Hook:</h3>
                  <p>Every homebuyer is told the same thing: &quot;The seller pays the agent commissions.&quot;</p>
                  <p className="mt-2">That&apos;s technically true. And completely misleading.</p>
                  <p className="mt-2">Here&apos;s what&apos;s actually happening with your money.</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The Traditional Math:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Home sells for $1M</li>
                    <li>Seller pays 5-6% total commission ($50K-$60K)</li>
                    <li>Split: 2.5-3% to listing agent, 2.5-3% to buyer&apos;s agent</li>
                    <li>Buyer pays $1M purchase price</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The Reality:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Commission comes from sale proceeds</li>
                    <li>Sale proceeds come from... the buyer&apos;s money</li>
                    <li>That $1M you paid? $25K-$30K went to YOUR agent</li>
                    <li>The seller priced the home expecting to pay that commission</li>
                    <li>YOU funded it</li>
                  </ul>
                </div>

                <div className="bg-th-gold/10 border border-th-gold/30 rounded-xl p-4">
                  <h3 className="font-bold text-th-gold-dark mb-2">The Post-NAR Settlement Change (2024):</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Buyer agent commission no longer guaranteed in MLS</li>
                    <li>Buyers now negotiating agent fees directly</li>
                    <li>Opportunity: Take control of that $25K-$30K</li>
                  </ul>
                </div>

                <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                  <h3 className="font-bold text-th-cyan-dark mb-2">The Revelation:</h3>
                  <p className="text-th-slate-700 italic">
                    &quot;On a $1M Bay Area home, you&apos;re indirectly paying $25K-$30K for buyer agent services. What if you could negotiate that down to $7.5K and pocket the difference?&quot;
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Real Example:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li><strong>Traditional:</strong> Pay $1M, your agent gets $25K, you get $0 back</li>
                    <li><strong>TurboHome:</strong> Pay $1M, your agent gets $7.5K flat fee, you get $17.5K back</li>
                  </ul>
                </div>

                <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                  <p className="font-semibold text-th-slate-900">CTA:</p>
                  <p className="text-th-slate-600">&quot;Tomorrow: The 3 ways to use your commission rebate to win bidding wars&quot;</p>
                </div>
              </div>
            </div>
          </article>

          {/* DAY 3 */}
          <article id="day3" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-th-cyan/30">
                3
              </span>
              <div>
                <p className="text-sm text-th-slate-500 font-medium">Day 3</p>
                <h2 className="text-2xl font-bold text-th-slate-900">How to Make Your Offer $25K More Competitive</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-th-slate-200 overflow-hidden">
              <div className="bg-th-slate-100 px-6 py-4 border-b border-th-slate-200">
                <p className="text-sm text-th-slate-500">Subject Line:</p>
                <p className="font-semibold text-th-slate-900">&quot;3 ways to use commission rebates to beat higher offers&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-th-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Hook:</h3>
                  <p>Arnab offered $985K on a San Francisco home.</p>
                  <p>Three other buyers offered $1M+.</p>
                  <p className="font-semibold text-th-slate-900 mt-2">Arnab won.</p>
                  <p className="mt-2">He didn&apos;t have more money. He had better economics.</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The 3 Rebate Strategies:</h3>

                  <div className="space-y-4">
                    <div className="bg-th-emerald/5 border border-th-emerald/20 rounded-xl p-4">
                      <h4 className="font-bold text-th-emerald mb-2">Option 1: Boost Your Offer</h4>
                      <ul className="list-disc list-inside space-y-1 text-th-slate-600 text-sm">
                        <li>Apply your rebate directly to purchase price</li>
                        <li>Example: $1M offer + $23K rebate = $1,023K effective offer</li>
                        <li>Your out-of-pocket: still $1M</li>
                        <li>Seller sees: $23K higher offer than competition</li>
                      </ul>
                    </div>

                    <div className="bg-th-gold/5 border border-th-gold/20 rounded-xl p-4">
                      <h4 className="font-bold text-th-gold-dark mb-2">Option 2: Cash at Closing</h4>
                      <ul className="list-disc list-inside space-y-1 text-th-slate-600 text-sm">
                        <li>Receive rebate as cash after close</li>
                        <li>Use for: moving costs, renovations, reserves, investment</li>
                        <li>Example: $82K rebate on a $3M home = immediate ROI</li>
                      </ul>
                    </div>

                    <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                      <h4 className="font-bold text-th-cyan-dark mb-2">Option 3: Buy Down Your Mortgage Rate</h4>
                      <ul className="list-disc list-inside space-y-1 text-th-slate-600 text-sm">
                        <li>Use rebate to reduce interest rate</li>
                        <li>Example: 2% lower first year, 1% lower second year</li>
                        <li>Saves thousands more over loan lifetime</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Real Story: Arnab&apos;s Win</h3>
                  <p className="italic bg-th-slate-50 p-4 rounded-xl border border-th-slate-200">
                    &quot;Arnab was competing against 4 other buyers in the Bay Area. He used his $23K TurboHome rebate to boost his offer price. The seller saw a higher number, but Arnab&apos;s actual cost stayed the same. He won the bidding war without spending more.&quot;
                  </p>
                  <p className="text-sm text-th-slate-500 mt-2">— from Business Insider article</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The Math That Matters:</h3>
                  <p>On a $1M home where seller offers 2.5% buyer commission:</p>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600 mt-2">
                    <li>Traditional agent takes: $25K</li>
                    <li>TurboHome fee: $7.5K</li>
                    <li>Your rebate: $17.5K</li>
                    <li><strong>Your advantage: $17.5K more firepower</strong></li>
                  </ul>
                </div>

                <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                  <p className="font-semibold text-th-slate-900">CTA:</p>
                  <p className="text-th-slate-600">&quot;Tomorrow: Real case study of how a buyer won with the SECOND HIGHEST offer&quot;</p>
                </div>
              </div>
            </div>
          </article>

          {/* DAY 4 */}
          <article id="day4" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-th-cyan/30">
                4
              </span>
              <div>
                <p className="text-sm text-th-slate-500 font-medium">Day 4</p>
                <h2 className="text-2xl font-bold text-th-slate-900">Case Study: Winning with a Lower Offer</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-th-slate-200 overflow-hidden">
              <div className="bg-th-slate-100 px-6 py-4 border-b border-th-slate-200">
                <p className="text-sm text-th-slate-500">Subject Line:</p>
                <p className="font-semibold text-th-slate-900">&quot;[CASE STUDY] She offered $15K LESS and still won. Here&apos;s how.&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-th-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Hook:</h3>
                  <p>Seven offers. Hers was $1.185M.</p>
                  <p>The highest? $1.2M.</p>
                  <p className="font-semibold text-th-slate-900 mt-2">She won anyway.</p>
                  <p className="mt-2">Here&apos;s the exact math that made the seller choose her.</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The Setup:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Property: 3BR home in Mountain View</li>
                    <li>List price: $1.15M</li>
                    <li>Seven competing offers</li>
                    <li>Highest offer: $1.2M (traditional agent)</li>
                    <li>Winning offer: $1.185M (TurboHome buyer)</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-th-rose/5 border border-th-rose/20 rounded-xl p-4">
                    <h4 className="font-bold text-th-rose mb-3">Offer A: $1.2M (Traditional)</h4>
                    <ul className="space-y-1 text-sm text-th-slate-600">
                      <li>Purchase price: $1,200,000</li>
                      <li>Buyer agent commission: -$30,000</li>
                      <li>Listing agent commission: -$30,000</li>
                      <li className="font-bold text-th-slate-900 pt-2 border-t border-th-rose/20">Seller&apos;s net: $1,140,000</li>
                    </ul>
                  </div>

                  <div className="bg-th-emerald/5 border border-th-emerald/20 rounded-xl p-4">
                    <h4 className="font-bold text-th-emerald mb-3">Offer B: $1.185M (TurboHome)</h4>
                    <ul className="space-y-1 text-sm text-th-slate-600">
                      <li>Purchase price: $1,185,000</li>
                      <li>Buyer agent commission: $0</li>
                      <li>Listing agent commission: -$29,625</li>
                      <li className="font-bold text-th-slate-900 pt-2 border-t border-th-emerald/20">Seller&apos;s net: $1,155,375</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-th-cyan/5 border border-th-cyan/20 rounded-xl p-4">
                  <h3 className="font-bold text-th-cyan-dark mb-2">The Result:</h3>
                  <p className="text-th-slate-700">
                    Seller chooses Offer B and nets <strong>$15,375 MORE</strong> despite the lower purchase price.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">What the Buyer Got:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li>Purchase price: $1.185M (saved $15K vs. competing offers)</li>
                    <li>TurboHome fee: $7,500 (instead of $29,625 indirect commission)</li>
                    <li>Net advantage: $22,125 saved</li>
                    <li>PLUS: Won a competitive bidding war</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Why This Worked:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-th-slate-600">
                    <li><strong>Seller math:</strong> $1.185M with no buyer commission &gt; $1.2M with buyer commission</li>
                    <li><strong>Buyer math:</strong> Lower purchase price + lower agent fee = win-win</li>
                    <li><strong>Certainty:</strong> TurboHome buyers close at 50% higher rate than traditional</li>
                  </ol>
                </div>

                <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                  <p className="font-semibold text-th-slate-900">CTA:</p>
                  <p className="text-th-slate-600">&quot;Tomorrow: Your step-by-step playbook for using this on your next offer&quot;</p>
                </div>
              </div>
            </div>
          </article>

          {/* DAY 5 */}
          <article id="day5" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-th-cyan to-th-cyan-dark rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-th-cyan/30">
                5
              </span>
              <div>
                <p className="text-sm text-th-slate-500 font-medium">Day 5</p>
                <h2 className="text-2xl font-bold text-th-slate-900">Your Home Buying Advantage Playbook</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-th-slate-200 overflow-hidden">
              <div className="bg-th-slate-100 px-6 py-4 border-b border-th-slate-200">
                <p className="text-sm text-th-slate-500">Subject Line:</p>
                <p className="font-semibold text-th-slate-900">&quot;Your step-by-step guide to commission-optimized offers&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-th-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Hook:</h3>
                  <p>You now understand what 95% of homebuyers don&apos;t:</p>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600 mt-2">
                    <li>Agent commissions come from YOUR money</li>
                    <li>You can negotiate them down from $25K to $7.5K</li>
                    <li>The difference makes your offers more competitive OR goes in your pocket</li>
                  </ul>
                  <p className="mt-3 font-semibold text-th-slate-900">Here&apos;s exactly how to use this advantage.</p>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">TurboHome Flat Fee Pricing:</h3>
                  <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-th-slate-200">
                          <th className="text-left py-2 text-th-slate-900">Home Price</th>
                          <th className="text-right py-2 text-th-slate-900">Flat Fee</th>
                          <th className="text-right py-2 text-th-emerald">Potential Savings</th>
                        </tr>
                      </thead>
                      <tbody className="text-th-slate-600">
                        <tr className="border-b border-th-slate-100">
                          <td className="py-2">$0-$500K</td>
                          <td className="text-right">$6K</td>
                          <td className="text-right text-th-emerald">Up to $9K</td>
                        </tr>
                        <tr className="border-b border-th-slate-100">
                          <td className="py-2">$500K-$1M</td>
                          <td className="text-right">$9K</td>
                          <td className="text-right text-th-emerald">Up to $21K</td>
                        </tr>
                        <tr className="border-b border-th-slate-100">
                          <td className="py-2">$1M-$2M</td>
                          <td className="text-right">$12K</td>
                          <td className="text-right text-th-emerald">Up to $48K</td>
                        </tr>
                        <tr className="border-b border-th-slate-100">
                          <td className="py-2">$2M-$3M</td>
                          <td className="text-right">$15K</td>
                          <td className="text-right text-th-emerald">Up to $75K</td>
                        </tr>
                        <tr className="border-b border-th-slate-100">
                          <td className="py-2">$3M-$5M</td>
                          <td className="text-right">$20K</td>
                          <td className="text-right text-th-emerald">Up to $130K</td>
                        </tr>
                        <tr>
                          <td className="py-2">$5M+</td>
                          <td className="text-right">$30K</td>
                          <td className="text-right text-th-emerald">$120K+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">What You Get:</h3>
                  <ul className="space-y-2 text-th-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Salaried agents (no incentive to push higher prices)
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      AI-powered valuation and risk analysis
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Full MLS access and offer submission
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-th-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Disclosure review and negotiation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">The 3-Step Process:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-th-cyan/10 rounded-lg flex items-center justify-center text-th-cyan font-bold">1</span>
                      <div>
                        <p className="font-semibold text-th-slate-900">Calculate Your Advantage</p>
                        <p className="text-sm text-th-slate-600">Enter target home price, see traditional commission vs. TurboHome fee, calculate rebate amount</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-th-cyan/10 rounded-lg flex items-center justify-center text-th-cyan font-bold">2</span>
                      <div>
                        <p className="font-semibold text-th-slate-900">Choose Your Strategy</p>
                        <p className="text-sm text-th-slate-600">Bidding war → boost offer | Need cash → take rebate | Want lower payments → buy down rate</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-th-cyan/10 rounded-lg flex items-center justify-center text-th-cyan font-bold">3</span>
                      <div>
                        <p className="font-semibold text-th-slate-900">Win Your Home</p>
                        <p className="text-sm text-th-slate-600">50% win rate in competitive markets (vs. 30% traditional)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-th-emerald/5 border border-th-emerald/20 rounded-xl p-4">
                    <h4 className="font-bold text-th-emerald mb-2">When This Works Best:</h4>
                    <ul className="space-y-1 text-sm text-th-slate-600">
                      <li>✓ Competitive markets (Bay Area, Austin, Seattle)</li>
                      <li>✓ Multiple offer situations</li>
                      <li>✓ Sellers sensitive to net proceeds</li>
                      <li>✓ Homes $500K-$5M+ (bigger rebates)</li>
                    </ul>
                  </div>

                  <div className="bg-th-gold/5 border border-th-gold/20 rounded-xl p-4">
                    <h4 className="font-bold text-th-gold-dark mb-2">When to Stick with Traditional:</h4>
                    <ul className="space-y-1 text-sm text-th-slate-600">
                      <li>⚠ Off-market deals where commission isn&apos;t factor</li>
                      <li>⚠ Luxury markets where relationships matter more</li>
                      <li>⚠ You have existing agent relationship you value</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-th-slate-900 mb-3">Real Results:</h3>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-600">
                    <li><strong>Arnab:</strong> $23K rebate → won bidding war</li>
                    <li><strong>Jeff:</strong> $82K cash at closing → immediate savings</li>
                    <li><strong>Sarah:</strong> $15K lower offer → still won with better seller economics</li>
                    <li><strong>50% win rate</strong> for TurboHome buyers in competitive markets</li>
                  </ul>
                </div>

                <div className="bg-th-slate-900 text-white rounded-xl p-6">
                  <h3 className="font-bold mb-3">The Bottom Line:</h3>
                  <p className="mb-4">On the median Bay Area home ($1.3M), you&apos;re indirectly paying ~$32K in buyer agent commission.</p>
                  <p className="mb-2">With TurboHome:</p>
                  <ul className="list-disc list-inside space-y-1 text-th-slate-300">
                    <li>Pay $12K flat fee</li>
                    <li>Save $20K+ on agent costs</li>
                    <li>Use savings to win bidding wars OR pocket the cash</li>
                    <li>Same services, better economics</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-th-slate-900">Final CTAs:</p>
                  <div className="space-y-2">
                    <p className="text-th-cyan font-medium">[Calculate My Rebate] → Interactive calculator</p>
                    <p className="text-th-cyan font-medium">[Book 15-Min Strategy Call] → Calendar link</p>
                    <p className="text-th-cyan font-medium">[Browse Bay Area Homes] → Property search</p>
                  </div>
                </div>

                <div className="bg-th-slate-50 rounded-xl p-4 border border-th-slate-200">
                  <p className="font-semibold text-th-slate-900 mb-2">P.S. The Honest Truth:</p>
                  <p className="text-th-slate-600 italic">
                    &quot;TurboHome isn&apos;t right for everyone. If you need hand-holding, want weekend open houses with your agent, or value relationship over economics, stick with traditional agents.
                  </p>
                  <p className="text-th-slate-600 italic mt-2">
                    But if you&apos;re a data-driven buyer who wants full service at flat-fee pricing—and competitive advantage in bidding wars—this is the smartest way to buy a home in 2025.
                  </p>
                  <p className="text-th-slate-900 font-semibold mt-3">Your move.&quot;</p>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Why This Works Section */}
      <section className="py-16 bg-th-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Why This Email Course Works</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">1. Progressive Education Arc</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Day 1: Diagnoses problem (losing bidding wars)</li>
                <li>Day 2: Reveals hidden system (commission economics)</li>
                <li>Day 3: Shows solutions (3 rebate strategies)</li>
                <li>Day 4: Proves it works (real case study)</li>
                <li>Day 5: Enables action (clear playbook)</li>
              </ul>
            </div>

            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">2. Pain → Insight → Proof Pattern</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Open with relatable pain</li>
                <li>Reveal counterintuitive insight</li>
                <li>Provide concrete proof</li>
                <li>Tease tomorrow&apos;s value</li>
              </ul>
            </div>

            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">3. Real Numbers Throughout</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Specific rebate amounts ($23K, $82K)</li>
                <li>Actual case studies with names</li>
                <li>Side-by-side math comparisons</li>
                <li>No vague promises—concrete savings</li>
              </ul>
            </div>

            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">4. Addresses Skepticism</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Day 4 case study overcomes &quot;does this really work?&quot;</li>
                <li>Day 5 acknowledges when NOT to use TurboHome</li>
                <li>Builds trust through transparency</li>
              </ul>
            </div>

            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">5. Multiple CTAs</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Calculator (low commitment, high engagement)</li>
                <li>Strategy call (medium commitment, high intent)</li>
                <li>Property search (exploratory, educational)</li>
              </ul>
            </div>

            <div className="bg-th-slate-800 rounded-xl p-6">
              <h3 className="font-bold text-th-cyan mb-3">6. Emotional + Rational Appeal</h3>
              <ul className="space-y-1 text-sm text-th-slate-300">
                <li>Emotional: Losing bidding wars feels terrible</li>
                <li>Rational: Here&apos;s the math that changes outcomes</li>
                <li>Result: Both head and heart aligned</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-th-slate-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-th-slate-400 text-sm">
            © {new Date().getFullYear()} TurboHome. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
