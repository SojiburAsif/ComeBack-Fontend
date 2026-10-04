
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Men's Collection",
    category: "For Him",
    description:
      "Modern essentials designed for everyday confidence.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/men",
  },
  {
    id: 2,
    title: "Women's Collection",
    category: "For Her",
    description:
      "Elegant styles made to express your individuality.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/women",
  },
  {
    id: 3,
    title: "New Arrivals",
    category: "Latest Style",
    description:
      "Fresh looks and new pieces from our latest collection.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/new-arrivals",
  },
  {
    id: 4,
    title: "Streetwear",
    category: "Urban Style",
    description:
      "Bold pieces inspired by modern street culture.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/streetwear",
  },
  {
    id: 5,
    title: "Summer Edit",
    category: "Summer",
    description:
      "Lightweight and refreshing styles for sunny days.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/summer",
  },
  {
    id: 6,
    title: "Casual Wear",
    category: "Everyday",
    description:
      "Relaxed fashion that keeps you comfortable all day.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/casual",
  },

  // Dropdown Collections
  {
    id: 7,
    title: "Formal Wear",
    category: "Premium",
    description:
      "Sophisticated outfits for important moments.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/formal",
  },
  {
    id: 8,
    title: "Accessories",
    category: "Complete Look",
    description:
      "Finishing touches that make every outfit stand out.",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/accessories",
  },
  {
    id: 9,
    title: "Premium Collection",
    category: "Luxury",
    description:
      "Exclusive pieces crafted for a refined wardrobe.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/premium",
  },
  {
    id: 10,
    title: "Winter Collection",
    category: "Winter Edit",
    description:
      "Warm layers with a timeless contemporary aesthetic.",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/winter",
  },
  {
    id: 11,
    title: "Denim Collection",
    category: "Denim",
    description:
      "Classic denim pieces redesigned for modern wardrobes.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/denim",
  },
  {
    id: 12,
    title: "Minimal Collection",
    category: "Minimal",
    description:
      "Clean silhouettes, neutral tones and effortless style.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop",
    href: "/collections/minimal",
  },
];

export default function HomeList() {
  const [isOpen, setIsOpen] = useState(false);

  // প্রথম ৬টা card
  const visibleCollections = collections.slice(0, 6);

  // বাকি collection dropdown-এ
  const dropdownCollections = collections.slice(6);

  return (
    <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-zinc-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              <Sparkles size={14} />
              Explore Fashion
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
              Discover Our Collections
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base">
              Explore our carefully curated collections and discover
              a style that fits you perfectly.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/collections"
            className="group inline-flex w-fit items-center gap-2 border-b border-zinc-900 pb-1 text-sm font-medium text-zinc-900 transition-all duration-300 hover:gap-3 dark:border-white dark:text-white"
          >
            View All Collections
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= Cards ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCollections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative block h-[430px] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 sm:h-[470px]"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Category */}
              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="text-2xl font-medium text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[90%] text-sm leading-6 text-white/75">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-all duration-300 group-hover:px-6">
                    View Collection
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= Dropdown ================= */}
        <div className="relative mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-600"
          >
            More Collections

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute bottom-full z-20 mb-3 w-[280px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:w-[340px]">
              {dropdownCollections.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.category}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/collections"
            className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:gap-4 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Explore All Collections

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

