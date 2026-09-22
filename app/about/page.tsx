export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* ================= HERO SECTION ================= */}

      <section className="text-center">
        <p className="mb-3 text-sm font-semibold text-blue-600">ABOUT US</p>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          We Build Simple & Powerful Digital Experiences
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg">
          We create modern, reliable and user-friendly digital solutions that
          help people and businesses achieve their goals.
        </p>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 md:items-center md:gap-10">
        {/* LEFT SIDE */}

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Who We Are
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We are a technology-focused team passionate about building modern
            web applications and digital products. Our goal is to create
            applications that are simple to use, fast and scalable.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We believe good software should not only look great but should also
            provide a smooth and meaningful experience to its users.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">What We Believe</h3>

          <ul className="mt-5 space-y-4 sm:mt-6">
            <li className="flex gap-3 text-sm sm:text-base">
              <span className="text-blue-400">✓</span>
              <span>Simple and clean design</span>
            </li>

            <li className="flex gap-3 text-sm sm:text-base">
              <span className="text-blue-400">✓</span>
              <span>Reliable and scalable solutions</span>
            </li>

            <li className="flex gap-3 text-sm sm:text-base">
              <span className="text-blue-400">✓</span>
              <span>User-focused development</span>
            </li>

            <li className="flex gap-3 text-sm sm:text-base">
              <span className="text-blue-400">✓</span>
              <span>Continuous improvement</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="mt-16 sm:mt-20">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Our Values
        </h2>

        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3">
          {/* Innovation */}

          <div className="rounded-xl border p-5 transition hover:shadow-lg sm:p-6">
            <h3 className="text-xl font-semibold text-slate-900">Innovation</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We continuously explore new technologies and better ways to solve
              problems.
            </p>
          </div>

          {/* Quality */}

          <div className="rounded-xl border p-5 transition hover:shadow-lg sm:p-6">
            <h3 className="text-xl font-semibold text-slate-900">Quality</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We focus on creating reliable, maintainable and high-quality
              applications.
            </p>
          </div>

          {/* User First */}

          <div className="rounded-xl border p-5 transition hover:shadow-lg sm:p-6">
            <h3 className="text-xl font-semibold text-slate-900">User First</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Every product we build starts with understanding the needs of its
              users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
