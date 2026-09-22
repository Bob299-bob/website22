import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/product";
import ContactModal from "../../components/contactmodel";

// URL se slug milega
type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Saare product ke URLs banane ke liye
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Product detail page
export default async function ProductPage({ params }: ProductPageProps) {
  // URL se slug nikal rahe hain
  const { slug } = await params;

  // Slug ke basis par product find kar rahe hain
  const product = products.find((item) => item.slug === slug);

  // Agar product nahi mila
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HEADER ================= */}

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <Link
            href="/products"
            className="text-lg font-bold text-gray-900 sm:text-xl"
          >
            My Products
          </Link>

          <Link
            href="/products"
            className="rounded-lg border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 sm:px-4"
          >
            ← Back
          </Link>
        </div>
      </header>

      {/* ================= PRODUCT INTRO ================= */}

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:gap-10">
          {/* LEFT SIDE */}

          <div>
            {/* Category */}

            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 sm:text-sm">
              {product.category}
            </p>

            {/* Product Name */}

            <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            {/* Description */}

            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
              {product.description}
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <ContactModal productName={product.name} />

              <a
                href="#features"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                View Features
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="rounded-2xl border bg-gray-50 p-6 sm:p-8">
            {/* Product Initial */}

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-2xl font-bold text-indigo-600 sm:h-20 sm:w-20 sm:text-3xl">
              {product.name.charAt(0)}
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900 sm:mt-6 sm:text-2xl">
              {product.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        {/* Section Heading */}

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 sm:text-sm">
            Features
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            What this product offers
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base">
            Explore the main features of {product.name}.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-5 transition hover:shadow-md sm:p-6"
            >
              {/* Number */}

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                {index + 1}
              </div>

              {/* Feature Name */}

              <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-5 sm:text-xl">
                {feature}
              </h3>

              {/* Feature Description */}

              <p className="mt-2 text-sm leading-6 text-gray-600">
                This feature is part of {product.name} and helps provide a
                better user experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 sm:text-sm">
              How It Works
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Simple and Easy
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {/* Step 1 */}

            <div className="rounded-xl border p-5 sm:p-6">
              <p className="text-2xl font-bold text-indigo-600">01</p>

              <h3 className="mt-3 text-lg font-semibold sm:mt-4 sm:text-xl">
                Explore
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Explore {product.name} and understand its main features.
              </p>
            </div>

            {/* Step 2 */}

            <div className="rounded-xl border p-5 sm:p-6">
              <p className="text-2xl font-bold text-indigo-600">02</p>

              <h3 className="mt-3 text-lg font-semibold sm:mt-4 sm:text-xl">
                Use
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Use the available features according to your requirements.
              </p>
            </div>

            {/* Step 3 */}

            <div className="rounded-xl border p-5 sm:p-6">
              <p className="text-2xl font-bold text-indigo-600">03</p>

              <h3 className="mt-3 text-lg font-semibold sm:mt-4 sm:text-xl">
                Get Results
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Get useful results from {product.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-indigo-600 px-5 py-10 text-center text-white sm:px-6 sm:py-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Ready to explore {product.name}?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:mt-4 sm:text-base">
            Explore the features and learn more about this product.
          </p>

          <div className="mt-6 sm:mt-7">
            <Link
              href="/products"
              className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-gray-100 sm:px-6 sm:text-base"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
