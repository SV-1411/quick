function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-script text-white text-7xl md:text-8xl">Luxora</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            We Turn <span className="font-script text-6xl md:text-7xl">Luxury</span> Clothing Brands<br />Into High-Demand Labels
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            High-impact website elevates brand perception and scale sustainably without becoming your identity.
            Strategic Marketing with media buying backed by rigorous attribution modeling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 font-sans text-sm hover:bg-gray-900 transition">
              Request a Private Strategy Call
            </button>
            <button className="border-2 border-black text-black px-8 py-4 font-sans text-sm hover:bg-gray-50 transition">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Split Section - Dark */}
      <section className="bg-dark-green text-white">
        <div className="grid md:grid-cols-2">
          <div
            className="h-96 md:h-auto bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          ></div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Most boutique advertising agencies focus on outdated<br />tactics, you need quick, lean, and profitable.
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We combine luxury brand story through content creating pieces<br />
              that position the approach for:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Sustainable growth and scalability</li>
              <li>• Performance tracking and analytics</li>
              <li>• High-level content standards</li>
              <li>• Built-in attribution modeling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-dark-green text-white py-32 px-6 relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-gray-400 text-xs mb-8 tracking-wide uppercase">
            Our Approach
          </p>
          <h3 className="font-script text-7xl md:text-8xl mb-12">
            Philosophy
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            As a boutique marketing agency, we go deeper.
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
            We understand that luxury buyers don't want the usual top-down strategic to absolute strategic using hand-up work with couture focused and
            crafted serving the luxury market.
          </p>
        </div>
      </section>

      {/* WHY Section */}
      <section className="bg-dark-green text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-6xl md:text-7xl mb-12">WHY</h2>
            <h3 className="font-script text-5xl md:text-6xl mb-8">Luxora</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We only 6 mostly boutique marketing customers focused on:
            </p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>• Heritage & timeless storytelling</li>
              <li>• Ethical luxury and sustainability</li>
              <li>• Artisanal craftsmanship</li>
              <li>• Premium aesthetic standards</li>
              <li>• Quality over quantity positioning</li>
              <li>• Emerging luxury designers</li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are NOT right for the brands that:
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Mass manufacture (non luxury), Drop cheap luxury items below the Luxury threshold and/or selling for utility
              based on items vs art & crafting positioning to new or luxury consumers.
            </p>
          </div>
          <div className="relative">
            <div
              className="h-96 md:h-[600px] bg-cover bg-center rounded-lg relative"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/170224/pexels-photo-1702224.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-transparent to-transparent rounded-lg"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-script text-5xl text-white mb-2">Who we</h3>
                <h3 className="font-serif text-6xl text-white">Work with</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Systems Section */}
      <section className="relative bg-[#062d2d] text-white px-6 overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '300px' }}>
        <div className="max-w-6xl mx-auto mb-24 relative z-20">
          <h2 className="font-serif text-5xl md:text-6xl mb-4">
            Our <span className="font-script text-6xl md:text-7xl">Growth</span> Systems
          </h2>
          <p className="text-gray-300 max-w-2xl text-sm">
            We don't offer random services.<br />
            We build structured growth systems designed specifically for luxury brands.
          </p>
        </div>

        {/* Blob 1 - Top Center-Right */}
        <div className="absolute top-[350px] right-0 md:right-12 w-[90%] md:w-[520px] z-40">
          <svg viewBox="0 0 520 380" className="w-full h-auto drop-shadow-lg">
            <path
              d="M 80 120 Q 40 80 60 40 L 420 30 Q 500 40 510 120 L 520 280 Q 510 360 400 370 L 100 375 Q 30 360 20 260 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3 text-black">1. Luxury Client Acquisition System™</h3>
            <p className="text-gray-800 text-xs md:text-sm mb-3 leading-relaxed">
              As a performance-focused boutique marketing agency, we attract buyers of premium products like yours.
            </p>
            <ul className="text-gray-800 text-xs md:text-sm space-y-2">
              <li>• Google Ads targeting high-intent searches</li>
              <li>• Meta Ads designed for aspiration and discovery</li>
              <li>• Audience segmentation for better lead quality</li>
              <li>• Continuous optimization to improve ROI</li>
            </ul>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">
              This ensures you get quality leads—not just volume.
            </p>
          </div>
        </div>

        {/* Blob 2 - Middle Left */}
        <div className="absolute top-[720px] left-0 md:left-8 w-[90%] md:w-[500px] z-50">
          <svg viewBox="0 0 500 360" className="w-full h-auto drop-shadow-lg">
            <path
              d="M 60 80 Q 20 50 30 20 L 380 10 Q 480 30 490 110 L 495 280 Q 480 340 340 355 L 80 355 Q 25 330 15 220 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3 text-black">2. Brand Elevation & Positioning</h3>
            <p className="text-gray-800 text-xs md:text-sm mb-3 leading-relaxed">
              As a strategic boutique branding agency, we refine how your brand is perceived in the market.
            </p>
            <ul className="text-gray-800 text-xs md:text-sm space-y-2">
              <li>• Strong visual identity alignment</li>
              <li>• Offer structuring for high-value perception</li>
              <li>• Messaging language to support premium positioning</li>
            </ul>
            <p className="text-gray-800 text-xs md:text-sm mt-4">
              The goal is simple: Make your brand feel like it was built by the best brand agency in the industry.
            </p>
          </div>
        </div>

        {/* Blob 3 - Middle Right */}
        <div className="absolute top-[1080px] right-0 md:right-16 w-[90%] md:w-[540px] z-40">
          <svg viewBox="0 0 540 400" className="w-full h-auto drop-shadow-lg">
            <path
              d="M 100 100 Q 50 60 70 30 L 440 20 Q 520 50 530 140 L 535 300 Q 520 370 380 385 L 110 385 Q 40 360 30 270 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3 text-black">3. Editorial Content Engine</h3>
            <p className="text-gray-800 text-xs md:text-sm mb-3 leading-relaxed">
              Content is not just about posting-it's about positioning. As a creative boutique social media agency, we create:
            </p>
            <ul className="text-gray-800 text-xs md:text-sm space-y-2">
              <li>• High-end reels and creatives</li>
              <li>• Story-driven campaigns</li>
              <li>• Behind-the-scenes storytelling</li>
              <li>• Consistent brand aesthetics</li>
            </ul>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">
              This helps your audience not just see your brand—but aspire to be part of it.
            </p>
          </div>
        </div>

        {/* Blob 4 - Bottom Center-Left */}
        <div className="absolute top-[1480px] left-0 md:left-12 w-[90%] md:w-[530px] z-50">
          <svg viewBox="0 0 530 380" className="w-full h-auto drop-shadow-lg">
            <path
              d="M 80 100 Q 35 60 50 25 L 410 15 Q 510 40 525 130 L 530 280 Q 515 355 360 370 L 90 370 Q 20 345 10 240 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3 text-black">4. High-Ticket Conversion Funnels</h3>
            <p className="text-gray-800 text-xs md:text-sm mb-3 leading-relaxed">
              Traffic without conversion is wasted. As a boutique ecommerce company, we optimize:
            </p>
            <ul className="text-gray-800 text-xs md:text-sm space-y-2">
              <li>• Landing pages for premium audiences</li>
              <li>• Booking and inquiry systems</li>
              <li>• Email sequences designed for final conversion</li>
              <li>• CRM and follow-up automation</li>
            </ul>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">
              Every step is designed to turn interest into revenue.
            </p>
          </div>
        </div>

        {/* Curved Transition to Brown Section */}
        <div className="absolute bottom-0 left-0 right-0 z-30" style={{ height: '180px', marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M 0 80 Q 240 40 480 60 Q 720 35 960 70 Q 1200 40 1440 80 L 1440 200 L 0 200 Z"
              fill="#a77457"
            />
          </svg>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#a77457] text-white py-32 px-6 relative">
        <div className="max-w-3xl">
          <h2 className="font-script text-7xl md:text-8xl mb-16">Results</h2>
          <p className="text-base mb-6 text-white leading-relaxed">
            Our approach is focused on delivering measurable and meaningful results.
          </p>
          <p className="text-base mb-8 text-white leading-relaxed">
            We help brands:
          </p>
          <ul className="space-y-3 text-base text-white mb-12">
            <li>• Attract high-value clients consistently</li>
            <li>• Increase qualified inquiries and bookings</li>
            <li>• Improve overall conversion rate</li>
            <li>• Build a strong and recognizable premium presence</li>
          </ul>
          <p className="text-base text-white leading-relaxed">
            We don't just act as a boutique marketing agency—we become your long-term growth partner.
          </p>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-script text-6xl md:text-7xl mb-12">Exclusivity</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We do not run a typical luxury marketing consultant or<br />
            spend-happy ad agency. We're deeply selective.
          </p>
          <ul className="text-left max-w-xl mx-auto space-y-3 text-gray-700 mb-12">
            <li>• 6 clients maximum</li>
            <li>• Strategic focus</li>
            <li>• White glove service</li>
            <li>• Direct founder involvement at every stage while we may not be the right fit for</li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you're a luxury clothing brand seeking high-level, hand-crafted, long-term, stand-out
            results... We may be exactly what you're looking for.
          </p>
          <p className="text-gray-800 font-serif text-xl mt-12">
            Ready to scale with a boutique marketing agency that truly understands luxury?<br />
            <span className="text-sm font-sans text-gray-600 block mt-4">
              Apply for a United Strategy Session.
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-green text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-script text-7xl md:text-8xl mb-8">Luxora</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
