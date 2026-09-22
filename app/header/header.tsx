export default function Header() {
  return (
    <header className="w-full bg-slate-900 px-4 py-4 text-white sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        {/* Logo / Website Name */}

        <h2 className="text-xl font-bold sm:text-2xl">My Website</h2>

        {/* Navigation */}

        <nav className="flex items-center gap-5 text-sm sm:gap-6 sm:text-base">
          <a href="/" className="transition-colors hover:text-blue-400">
            Home
          </a>

          <a href="/products" className="transition-colors hover:text-blue-400">
            Products
          </a>

          <a href="/about" className="transition-colors hover:text-blue-400">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
