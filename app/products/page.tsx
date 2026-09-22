import { products } from "../data/product";
import ProductCard from "../components/productCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-[8%]">
      {/* ================= HEADER ================= */}

      <section className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-[2px] text-indigo-600 sm:tracking-[3px]">
          Our Products
        </span>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:mt-4 sm:text-4xl md:text-5xl">
          Solutions Built for
          <br />
          <span className="text-indigo-600">Modern Businesses</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
          Explore our collection of intelligent software and digital solutions
          designed to make your work easier.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
