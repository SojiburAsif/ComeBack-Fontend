
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Modern Elegance",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Urban Style",
    category: "Streetwear",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
  {
    id: 3,
    title: "Classic Look",
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
  {
    id: 4,
    title: "Everyday Mood",
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
  {
    id: 5,
    title: "Minimal Aesthetic",
    category: "Minimal",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2",
  },
  {
    id: 6,
    title: "Summer Vibes",
    category: "Summer",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
  {
    id: 7,
    title: "Premium Style",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
  {
    id: 8,
    title: "New Season",
    category: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1540221652346-e5dd0b307a16?q=80&w=1000&auto=format&fit=crop",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-zinc-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Header ================= */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Our Gallery
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Fashion In Focus
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base">
            Explore our latest styles, inspirations and fashion moments
            captured through our collection.
          </p>
        </div>

        {/* ================= Gallery ================= */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px] lg:auto-rows-[250px]">
          {galleryImages.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className={`group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 ${item.className}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/65 sm:text-xs">
                  {item.category}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= Bottom Button ================= */}
        <div className="mt-10 flex justify-center sm:mt-14">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View Full Gallery

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
