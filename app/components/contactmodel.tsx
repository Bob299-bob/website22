"use client";

import { useState } from "react";

export default function ContactModal({ productName }: { productName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= GET STARTED BUTTON ================= */}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
      >
        Get Started
      </button>

      {/* ================= POPUP ================= */}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-5 sm:px-6">
          {/* Modal Box */}

          <div className="relative my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-xl sm:p-6">
            {/* Close Button */}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 text-2xl text-gray-500 transition hover:text-gray-900"
              aria-label="Close"
            >
              ×
            </button>

            {/* Heading */}

            <div className="pr-8">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Get Started
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Interested in{" "}
                <span className="font-semibold text-gray-900">
                  {productName}
                </span>
                ? Send us your details and we will contact you.
              </p>
            </div>

            {/* Form */}

            <form
              action="https://formsubmit.co/bobygupta603@gmail.com"
              method="POST"
              className="mt-5 space-y-4 sm:mt-6"
            >
              {/* Product */}

              <input type="hidden" name="Product" value={productName} />

              {/* Subject */}

              <input
                type="hidden"
                name="_subject"
                value={`New enquiry for ${productName}`}
              />

              {/* Name */}

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:text-base"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:text-base"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="Phone"
                  placeholder="Enter 10 digit phone number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:text-base"
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="Message"
                  rows={4}
                  placeholder="Tell us what you are looking for..."
                  required
                  minLength={10}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:text-base"
                />
              </div>

              {/* FormSubmit Settings */}

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />

              {/* Submit */}

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
