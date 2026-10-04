
import React from "react";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Star,
  Heart,
  Crown,
  Camera,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#fffaf8] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-rose-200/40 blur-[120px] dark:bg-rose-950/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-[140px] dark:bg-pink-950/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-orange-100/40 blur-[120px] dark:bg-orange-950/30"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            {/* Small Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 shadow-sm backdrop-blur dark:border-rose-800 dark:bg-slate-900/80 dark:text-rose-300">
              <Crown className="h-3.5 w-3.5 fill-rose-400" />
              New Collection 2026
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[76px] dark:text-white">
              Define Your
              <br />
              <span className="relative inline-block">
                Signature
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-3 left-0 h-4 w-full text-rose-400"
                  viewBox="0 0 300 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.5C73 3 220 3 296 11"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Style.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300">
              Discover timeless fashion, modern silhouettes, and effortlessly
              elegant pieces curated for people who love to stand out.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#collection"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-500 dark:hover:text-white sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6" />
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#lookbook"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-rose-700 dark:hover:bg-rose-950/50 sm:w-auto"
              >
                Explore Lookbook
              </a>
            </div>

            {/* Stats */}
            <div className="mt-11 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7 dark:divide-slate-800 dark:border-slate-800">
              <div className="pr-4 text-center lg:text-left">
                <div className="text-2xl font-black text-slate-950 dark:text-white">25K+</div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Happy Customers
                </div>
              </div>

              <div className="px-4 text-center lg:text-left">
                <div className="flex items-center justify-center gap-1 text-2xl font-black text-slate-950 lg:justify-start">
                  4.9
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Customer Rating
                </div>
              </div>

              <div className="pl-4 text-center lg:text-left">
                <div className="text-2xl font-black text-slate-950 dark:text-white">120+</div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  New Arrivals
                </div>
              </div>
            </div>
          </div>

          {/* Right Fashion Showcase */}
          <div className="relative mx-auto w-full max-w-[610px] lg:ml-auto">
            {/* Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-10 h-72 w-72 rounded-full bg-rose-100 blur-3xl dark:bg-rose-950/50"
            />

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(190,80,100,0.15)] dark:border-slate-800 dark:bg-slate-900">
              <div className="relative overflow-hidden rounded-[26px] bg-[#f4e7e5] dark:bg-slate-800">
                {/* Fashion Image */}
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
                  alt="Fashion House latest collection"
                  className="h-[560px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Top Floating Label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-rose-500" />
                  Featured Look
                </div>

                {/* Favorite Button */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-all hover:scale-105 hover:text-rose-500"
                >
                  <Heart className="h-4.5 w-4.5" />
                </button>

                {/* Bottom Info */}
                <div className="absolute right-5 bottom-5 left-5">
                  <div className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-black/30 p-4 text-white backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        The Signature Edit
                      </p>

                      <h3 className="mt-1 text-2xl font-black">
                        Modern Muse
                      </h3>

                      <p className="mt-1 text-sm text-white/75">
                        Elegant. Confident. Unforgettable.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-rose-500 hover:text-white"
                    >
                      View Look
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mini Card - Bottom Left */}
            <div className="absolute -bottom-6 -left-3 hidden w-52 rounded-2xl border border-white bg-white/95 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:block md:-left-7">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-xl bg-rose-100">
                  <img
                    src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=300&q=80"
                    alt="Latest fashion"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Trending
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Soft Tailoring
                  </p>
                  <p className="mt-1 text-xs text-rose-500">
                    Explore now →
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Mini Card - Top Right */}
            <div className="absolute -top-5 right-2 hidden rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:block md:-right-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50">
                  <Camera className="h-4 w-4 text-rose-500" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">
                    Follow our style
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    @fashionhouse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:gap-x-14">
            <span>Luxury Wear</span>
            <span>Everyday Essentials</span>
            <span>New Season</span>
            <span>Premium Fabrics</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
