
"use client";

import Link from "next/link";
import {
  Menu,
  X,
  Heart,
  ShoppingBag,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../Module/Them";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/collection" },
    { name: "Collections", href: "/collections" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#fffaf8]/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
      {/* Announcement Bar */}
      <div className="hidden border-b border-rose-100 bg-rose-50/70 sm:block dark:border-rose-900/50 dark:bg-rose-950/30">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-500 dark:text-rose-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>
            New Season • Free Worldwide Shipping On Orders Over $100
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Fashion House Home"
        >
          {/* Logo Mark */}
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-950 shadow-lg shadow-slate-900/10 transition-transform duration-300 group-hover:scale-105">
            <div className="absolute h-7 w-7 rounded-full border border-white/30" />

            <div className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-white">
              <div className="h-2 w-2 bg-white" />
            </div>
          </div>

          {/* Brand Name */}
          <div className="leading-none">
            <span className="block font-serif text-[22px] font-bold tracking-[-0.02em] text-slate-950 dark:text-white">
              Fashion
            </span>

            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.36em] text-rose-500">
              House
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.name}

              {/* Hover Line */}
              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-rose-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
          >
            <Heart className="h-4 w-4" />

            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
              2
            </span>
          </button>

          {/* Shopping Bag */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
          >
            <ShoppingBag className="h-4 w-4" />

            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-[9px] font-bold text-white">
              3
            </span>
          </button>

          {/* Theme Toggle */}
          <div className="ml-1">
            <ModeToggle />
          </div>

          {/* Shop Now */}
          <Link
            href="/collection"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-500 dark:hover:text-white"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-[#fffaf8] transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-950 md:hidden ${
          isMenuOpen
            ? "max-h-[650px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          {/* Mobile Nav Links */}
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-rose-500 dark:border-slate-800 dark:text-slate-300"
              >
                <span>{item.name}</span>

                <span className="text-slate-300 dark:text-slate-600">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {/* Search */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
            >
              <Search className="h-4 w-4" />
              Search
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
            >
              <Heart className="h-4 w-4" />
              Wishlist
            </button>

            {/* Bag */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/50"
            >
              <ShoppingBag className="h-4 w-4" />
              Bag
            </button>
          </div>

          {/* Mobile Shop Button */}
          <Link
            href="/collection"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white transition-all hover:bg-rose-500 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-500 dark:hover:text-white"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

