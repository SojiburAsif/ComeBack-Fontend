"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Menu,
  X,
  Heart,
  ShoppingBag,
  Search,
  Sparkles,
  User,
  LogIn,
  UserPlus,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { ModeToggle } from "../Module/Them";

/* ================= USER TYPE ================= */

type UserData = {
  name: string;
  email: string;
  role: "USER";
};

/* ================= DEMO USER ================= */

const demoUser: UserData = {
  name: "Sojibur Asif",
  email: "sojibur@example.com",
  role: "USER",
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
   * Demo user initially logged in.
   * Logout করলে user null হবে এবং Login/Register দেখাবে।
   */
  const [user, setUser] = useState<UserData | null>(demoUser);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  /* ================= NAVIGATION ================= */

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "New Arrivals",
      href: "/collection",
    },
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Lookbook",
      href: "/lookbook",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  /* ================= LOGOUT ================= */

  const handleLogout = () => {
    setUser(null);
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  /* ================= CLOSE MOBILE MENU ================= */

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#fffaf8]/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      <div className="hidden border-b border-rose-100 bg-rose-50/70 sm:block dark:border-rose-900/50 dark:bg-rose-950/30">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-500 dark:text-rose-300">
          <Sparkles className="h-3.5 w-3.5" />

          <span>
            New Season • Free Worldwide Shipping On Orders Over $100
          </span>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}

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

          {/* Brand */}
          <div className="leading-none">
            <span className="block font-serif text-[22px] font-bold tracking-[-0.02em] text-slate-950 dark:text-white">
              Fashion
            </span>

            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.36em] text-rose-500">
              House
            </span>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.name}

              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-rose-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* =====================================================
            DESKTOP ACTIONS
        ===================================================== */}

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

            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-[9px] font-bold text-white dark:bg-white dark:text-slate-950">
              3
            </span>
          </button>

          {/* Theme */}
          <div className="ml-1">
            <ModeToggle />
          </div>

          {/* =================================================
              USER / LOGIN / REGISTER
          ================================================= */}

          {user ? (
            <div className="relative ml-2">
              {/* User Button */}
              <button
                type="button"
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="menu"
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 pr-3 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-rose-800 dark:hover:bg-rose-950/30"
              >
                {/* Avatar */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                {/* User Name + Role */}
                <div className="hidden text-left xl:block">
                  <p className="max-w-[110px] truncate text-xs font-semibold text-slate-900 dark:text-white">
                    {user.name}
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-rose-500">
                    {user.role}
                  </p>
                </div>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    isUserMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
                  {/* User Information */}
                  <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/30">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                        {user.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                          {user.name}
                        </p>

                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-500 dark:bg-slate-900">
                      Role: {user.role}
                    </div>
                  </div>

                  {/* Profile */}
                  <Link
                    href="/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rose-500 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </Link>

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* =================================================
               LOGGED OUT
            ================================================= */
            <div className="ml-2 flex items-center gap-2">
              {/* Login */}
              <Link
                href="/Login"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-rose-700 dark:hover:bg-rose-950/30 dark:hover:text-rose-400"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>

              {/* Register */}
              {/* <Link
                href="/Register"
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-rose-500/30"
              >
                <UserPlus className="h-4 w-4" />
                Register
              </Link> */}
            </div>
          )}

          {/* Shop Now */}
          <Link
            href="/collection"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 dark:bg-white dark:text-slate-950 dark:hover:bg-rose-500 dark:hover:text-white"
          >
            Shop Now
          </Link>
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ===================================================== */}

        <div className="flex items-center gap-2 md:hidden">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
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

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-[#fffaf8] transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-950 md:hidden ${
          isMenuOpen
            ? "max-h-[900px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-rose-500 dark:border-slate-800 dark:text-slate-300"
              >
                <span>{item.name}</span>

                <span className="text-slate-300 dark:text-slate-600">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* =================================================
              MOBILE USER / AUTH
          ================================================= */}

          {user ? (
            <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50 p-4 dark:border-rose-900/50 dark:bg-rose-950/30">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                    {user.email}
                  </p>

                  <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider text-rose-500">
                    Role: {user.role}
                  </span>
                </div>
              </div>

              {/* Profile / Logout */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link
                  href="/profile"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-xs font-semibold text-white transition hover:bg-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            /* =================================================
               MOBILE LOGIN / REGISTER
            ================================================= */
            <div className="mt-5 grid grid-cols-2 gap-2">
              {/* Login */}
              <Link
                href="/Login"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-700"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>

              {/* Register */}
              {/* <Link
                href="/Register"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-rose-500 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
              >
                <UserPlus className="h-4 w-4" />
                Register
              </Link> */}
            </div>
          )}

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="mt-3 grid grid-cols-3 gap-2">
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

          {/* Mobile Shop */}
          <Link
            href="/collection"
            onClick={closeMobileMenu}
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