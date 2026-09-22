import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-7">
      {/* Icon */}

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl font-bold text-indigo-600 sm:mb-6 sm:h-14 sm:w-14 sm:text-2xl">
        {product.name.charAt(0)}
      </div>

      {/* Category */}

      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
        {product.category}
      </span>

      {/* Name */}

      <h2 className="mt-2 text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
        {product.name}
      </h2>

      {/* Description */}

      <p className="mt-3 min-h-[auto] text-sm leading-6 text-gray-500 sm:min-h-[75px] sm:leading-7">
        {product.description}
      </p>

      {/* Button */}

      <Link
        href={`/products/${product.slug}`}
        className="mt-5 block rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-600 sm:mt-6"
      >
        View Product →
      </Link>
    </div>
  );
}
