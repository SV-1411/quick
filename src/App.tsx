function App() {
  return (
    <div className="bg-white text-[#0a2923]">
      <header className="relative isolate h-[60vh] min-h-[380px] overflow-hidden sm:h-[68vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-start justify-center pt-8">
          <h1 className="font-script text-5xl text-white sm:text-6xl">Luxora</h1>
        </div>
      </header>

      <main>
        <section className="bg-[#efefef] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl leading-tight sm:text-5xl">
              We Turn <span className="font-script text-5xl sm:text-6xl">Luxury</span> Clothing Brands
              <br />
              Into High-Demand Labels
            </h2>

            <div className="mx-auto mt-14 max-w-3xl space-y-5 text-[13px] leading-relaxed text-[#23312d] sm:text-sm">
              <p>
                A results-driven boutique marketing agency built exclusively for luxury fashion brands—helping you attract
                high-value clients, elevate brand perception, and scale sustainably without discounting your identity.
              </p>
              <p>
                We help you move from being just another brand in the market to becoming a recognized, desirable, and
                premium label.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-[13px] sm:text-sm">
              <p>Request a Private Strategy Call</p>
              <p>View Our Work</p>
            </div>

            <div className="mt-10 border-t border-[#d3d3d3] pt-8">
              <p className="font-script text-3xl leading-tight sm:text-4xl">
                Not every brand is meant to be premium—and not every agency understands premium brands.
              </p>
              <p className="mt-4 max-w-3xl text-[13px] leading-relaxed text-[#23312d] sm:text-sm">
                As a specialized boutique branding agency, we work only with brands where craftsmanship, exclusivity, and
                identity define the product. Our approach is selective, strategic, and tailored—ensuring every brand we work
                with receives focused attention and high-level execution.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-dark-green text-white">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <aside
              className="min-h-[460px] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              }}
            />

            <article className="px-6 py-14 sm:px-10 lg:px-14">
              <p className="max-w-xl text-base leading-relaxed text-[#f0f3f2]">
                Most boutique advertising agencies focus on visibility-getting you more clicks, impressions, and traffic.
              </p>
              <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-[#cad4d1] sm:text-sm">
                But luxury brands don't grow through visibility alone. They grow through:
              </p>
              <p className="mt-5 font-script text-4xl">Perception, desire, and positioning.</p>
              <p className="mt-7 text-base">As a boutique marketing agency, we go deeper:</p>
              <ul className="mt-9 space-y-4 text-[13px] leading-relaxed text-[#d4dedb] sm:text-sm">
                <li>We understand how luxury buyers think and make decisions</li>
                <li>We design systems that attract high-intent, high-value clients</li>
                <li>We position your brand to feel premium at every touchpoint</li>
              </ul>
            </article>
          </div>

          <div className="relative px-6 pb-16 pt-8 sm:px-10">
            <p className="text-center text-[12px] text-[#d9e1df] sm:text-[13px]">Excess in the luxury market.</p>
            <p className="mt-2 text-center font-script text-3xl leading-tight sm:text-4xl">
              Grow your brand's perceived worth more than how often it's seen.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-dark-green px-6 py-16 text-white sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <article>
              <p className="max-w-2xl text-[13px] leading-relaxed text-[#d4dedb] sm:text-sm">
                We are a niche boutique marketing company focused on fashion brands that aim to evolve into something
                extraordinary.
              </p>

              <div className="mt-7 space-y-2 text-[13px] sm:text-sm">
                <p>We work with:</p>
                <ul className="space-y-1 text-[#d4dedb]">
                  <li>• Direct-to-consumer boutiques</li>
                  <li>• Ethical couture brands</li>
                  <li>• Premium artisanal labels</li>
                  <li>• Bespoke tailoring houses</li>
                  <li>• Emerging luxury designers</li>
                </ul>
              </div>

              <div className="mt-10 space-y-2 text-[13px] sm:text-sm">
                <p>We are the right fit for brands that:</p>
                <ul className="space-y-1 text-[#d4dedb]">
                  <li>• Want measurable premium positioning</li>
                  <li>• Aim to be valued as premium, not cheap alternatives</li>
                  <li>• Commit to bold, artistic brand identity</li>
                  <li>• Want consistent high-quality leads—not just traffic</li>
                </ul>
              </div>
            </article>

            <article className="relative isolate min-h-[340px] overflow-hidden bg-black/25">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/170224/pexels-photo-1702224.jpeg?auto=compress&cs=tinysrgb&w=1000)',
                }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 flex h-full items-end p-8">
                <h3 className="font-serif text-5xl leading-none">
                  Who we <span className="font-script text-5xl">Work</span>
                  <br />
                  with
                </h3>
              </div>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-dark-green px-6 pb-24 pt-16 text-white sm:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-5xl sm:text-6xl">
              Our <span className="font-script text-6xl sm:text-7xl">Growth</span> Systems
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] text-[#d4dedb] sm:text-sm">
              We don't offer random services.
              <br />
              We build structured growth systems designed specifically for luxury brands.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl space-y-8 lg:space-y-0">
            <article className="relative z-20 ml-0 w-full max-w-[560px] overflow-visible rounded-[48%_52%_45%_55%/52%_45%_55%_48%] bg-white px-8 py-10 text-[#111] shadow-lg lg:ml-auto">
              <h3 className="font-serif text-xl">1. Luxury Client Acquisition System™</h3>
              <p className="mt-3 text-sm leading-relaxed">
                As a performance-focused boutique marketing agency, we attract buyers who are already searching for premium
                products like yours.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>Google Ads targeting high-intent searches</li>
                <li>Meta Ads designed for aspiration and discovery</li>
                <li>Audience segmentation for better lead quality</li>
                <li>Continuous optimization to improve ROI</li>
              </ul>
            </article>

            <article className="relative z-30 w-full max-w-[560px] rounded-[55%_45%_50%_50%/45%_52%_48%_55%] bg-white px-8 py-10 text-[#111] shadow-lg lg:-mt-8 lg:ml-6">
              <h3 className="font-serif text-xl">2. Brand Elevation &amp; Positioning</h3>
              <p className="mt-3 text-sm leading-relaxed">
                As a strategic boutique branding agency, we refine how your brand is perceived in the market.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>Strong visual identity alignment</li>
                <li>Offer structuring for high-value perception</li>
                <li>Messaging language that supports premium positioning</li>
              </ul>
            </article>

            <article className="relative z-20 ml-0 w-full max-w-[580px] rounded-[48%_52%_57%_43%/56%_43%_57%_44%] bg-white px-8 py-10 text-[#111] shadow-lg lg:-mt-8 lg:ml-auto lg:mr-12">
              <h3 className="font-serif text-xl">3. Editorial Content Engine</h3>
              <p className="mt-3 text-sm leading-relaxed">
                Content is not just about posting—it's about positioning. As a creative boutique social media agency, we
                create:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>High-end reels and creative direction</li>
                <li>Story-driven campaigns</li>
                <li>Behind-the-scenes storytelling</li>
                <li>Consistent premium aesthetics</li>
              </ul>
            </article>

            <article className="relative z-30 w-full max-w-[560px] rounded-[56%_44%_48%_52%/45%_57%_43%_55%] bg-white px-8 py-10 text-[#111] shadow-lg lg:-mt-8 lg:ml-20">
              <h3 className="font-serif text-xl">4. High-Ticket Conversion Funnels</h3>
              <p className="mt-3 text-sm leading-relaxed">
                Traffic without conversion is wasted. As a boutique ecommerce company, we optimize:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                <li>Landing pages for premium audiences</li>
                <li>Booking and inquiry systems</li>
                <li>Email sequences designed for final conversion</li>
                <li>CRM and follow-up automation</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-[#a77457] px-6 py-20 text-white sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-script text-6xl sm:text-7xl">Results</h2>
            <div className="mt-8 max-w-2xl space-y-4 text-[13px] leading-relaxed sm:text-sm">
              <p>Our approach is focused on delivering measurable and meaningful results.</p>
              <p>We help brands:</p>
              <ul className="space-y-1">
                <li>• Attract high-value clients consistently</li>
                <li>• Increase qualified inquiries and bookings</li>
                <li>• Improve overall conversion rates</li>
                <li>• Build a strong and recognizable premium presence</li>
              </ul>
              <p>
                We don't just act as a boutique marketing agency—we become your long-term growth partner.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-script text-6xl sm:text-7xl">Exclusivity</h2>
            <div className="mx-auto mt-12 max-w-2xl space-y-4 text-[13px] leading-relaxed sm:text-sm">
              <p>
                We are not a volume-based boutique marketing consultant.
                <br />
                We intentionally work with a limited number of brands to ensure:
              </p>
              <ul className="space-y-1 pl-4">
                <li>• High-quality execution</li>
                <li>• Strategic focus</li>
                <li>• Boutique service</li>
              </ul>
              <p>
                If you're looking for mass marketing or quick wins, we may not be the right fit. But if you want to build a
                premium, long-term brand, we are.
              </p>
            </div>

            <p className="mt-20 text-[13px] sm:text-sm">
              Ready to scale with a boutique marketing agency that truly understands luxury?
              <br />
              <span className="inline-block pt-1">☞ Apply for a Private Strategy Session</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dark-green px-6 py-16 text-white sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-script text-6xl sm:text-7xl">Luxora</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
