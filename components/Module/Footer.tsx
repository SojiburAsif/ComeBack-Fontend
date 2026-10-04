"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  Heart,
  X,
  GitBranch,
  Link as LinkIcon,
  Camera,
  MapPin,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: LucideIcon;
  name: string;
  url: string;
}

export function Footer() {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const shopLinks: string[] = [
    "New Arrivals",
    "Women",
    "Men",
    "Accessories",
    "Best Sellers",
  ];

  const customerLinks: string[] = [
    "My Account",
    "Order Tracking",
    "Shipping & Delivery",
    "Returns & Exchanges",
    "Size Guide",
  ];

  const companyLinks: string[] = [
    "Our Story",
    "Lookbook",
    "Journal",
    "Contact Us",
    "Privacy Policy",
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: X,
      name: "X",
      url: "https://x.com/",
    },
    {
      icon: GitBranch,
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      icon: LinkIcon,
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      icon: Camera,
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
  ];

  const renderLinks = (title: string, links: string[]): React.ReactNode => {
    return (
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
          {title}
        </h3>

        <ul className="space-y-3.5">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-200 hover:text-rose-500 dark:text-slate-400"
              >
                <span>{link}</span>

                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-slate-200 bg-[#fffaf8] dark:border-slate-800 dark:bg-slate-950">
      {/* =========================
          Decorative Background
      ========================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-rose-100/50 blur-[120px] dark:bg-rose-950/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-40 h-[350px] w-[350px] rounded-full bg-orange-100/40 blur-[120px] dark:bg-orange-950/20"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================
            Newsletter Banner
        ========================== */}
        <div className="relative overflow-hidden rounded-b-[28px] bg-slate-950 px-6 py-10 shadow-2xl shadow-slate-900/10 sm:px-10 md:py-12">
          {/* Newsletter Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-rose-500/20 blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Newsletter Content */}
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                <Mail className="h-3.5 w-3.5" />
                <span>Stay in style</span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                Get the latest from{" "}
                <span className="text-rose-400">Fashion House.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Be the first to discover new collections, exclusive drops,
                styling inspiration, and special offers.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full max-w-md">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    aria-label="Your email address"
                    autoComplete="email"
                    required
                    className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pr-4 pl-11 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-rose-400/60 focus:bg-white/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-rose-500 hover:text-white"
                >
                  <span>Subscribe</span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {subscribed && (
                <p
                  role="status"
                  className="mt-3 text-xs font-medium text-emerald-400"
                >
                  Thank you! You&apos;re now on the list.
                </p>
              )}

              <p className="mt-3 text-[11px] text-slate-500">
                No spam. Just style, new arrivals, and occasional offers.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            Main Footer
        ========================== */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a
              href="#"
              aria-label="Fashion House homepage"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo Mark */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 shadow-lg shadow-slate-900/10 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute h-7 w-7 rounded-full border border-white/30" />

                <div className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-white">
                  <div className="h-2 w-2 bg-white" />
                </div>
              </div>

              {/* Brand Name */}
              <div className="leading-none">
                <span className="block font-serif text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Fashion
                </span>

                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.38em] text-rose-500">
                  House
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
              Thoughtfully designed fashion for modern living. Discover timeless
              pieces, refined details, and effortless style made to become part
              of your story.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-3">
              <a
                href="#"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-rose-500 dark:text-slate-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                  <MapPin className="h-3.5 w-3.5" />
                </span>

                <span>Dhaka, Bangladesh</span>
              </a>

              <a
                href="tel:+8801000000000"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-rose-500 dark:text-slate-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                  <Phone className="h-3.5 w-3.5" />
                </span>

                <span>+880 1000 000 000</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          {renderLinks("Shop", shopLinks)}

          {/* Customer Care */}
          {renderLinks("Customer Care", customerLinks)}

          {/* Company */}
          {renderLinks("Company", companyLinks)}
        </div>

        {/* =========================
            Bottom Footer
        ========================== */}
        <div className="border-t border-slate-200 py-7 dark:border-slate-800">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-slate-500 dark:text-slate-400 lg:justify-start">
              <span>© {currentYear} Fashion House. All rights reserved.</span>

              <span className="text-slate-300">•</span>

              <span className="flex items-center gap-1">
                <span>Made with</span>

                <Heart
                  aria-hidden="true"
                  className="h-3.5 w-3.5 fill-rose-500 text-rose-500"
                />

                <span>for fashion lovers.</span>
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center gap-2">
              <span className="mr-2 hidden text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:block">
                Follow us
              </span>

              {socialLinks.map(({ icon: Icon, name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Fashion House on ${name}`}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-rose-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-400 lg:justify-start">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>

            <Link href="/collection" className="text-sm font-medium">
              New Arrivals
            </Link>

            <Link href="/collections" className="text-sm font-medium">
              Collections
            </Link>

            <Link href="/lookbook" className="text-sm font-medium">
              Lookbook
            </Link>

            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
