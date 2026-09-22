export default function HomePage() {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold tracking-wide text-blue-400 sm:text-base">
            WELCOME TO BOBY GUPTA
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Build Something
            <span className="text-blue-400"> Amazing</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg">
            Discover modern products, simple solutions and powerful digital
            experiences designed to make your life easier.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Explore Products
            </a>

            <a
              href="/about"
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600 sm:text-base">
            WHY CHOOSE US
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            We focus on creating simple, reliable and modern digital
            experiences.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {/* Card 1 */}

          <div className="rounded-xl border border-slate-200 p-5 transition hover:shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-xl font-bold text-blue-600">
              01
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Modern Design
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Clean and responsive interfaces that work beautifully across
              different screen sizes.
            </p>
          </div>

          {/* Card 2 */}

          <div className="rounded-xl border border-slate-200 p-5 transition hover:shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-xl font-bold text-green-600">
              02
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              High Performance
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Fast and optimized experiences designed for better performance and
              usability.
            </p>
          </div>

          {/* Card 3 */}

          <div className="rounded-xl border border-slate-200 p-5 transition hover:shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-xl font-bold text-purple-600">
              03
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Easy to Use
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Simple navigation and intuitive features that make everything easy
              to understand.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Explore our products and discover what we can offer.
          </p>

          <a
            href="/products"
            className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            View Products
          </a>
        </div>
      </section>
    </main>
  );
}
