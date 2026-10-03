
"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Heart,
  X,
  GitBranch as Github,
  Link as Linkedin,
  Camera,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  const productLinks = [
    "Demos",
    "Core Features",
    "Design System",
    "Integrations",
    "Changelog",
  ];

  const resourceLinks = [
    "Documentation",
    "Video Tutorials",
    "Theme Setup",
    "API Reference",
    "Community",
  ];

  const companyLinks = [
    "About Us",
    "Power Elite Author",
    "Customer Reviews",
    "Privacy Policy",
    "Contact Support",
  ];

  const socialLinks = [
    {
      icon: X,
      name: "X",
      url: "https://x.com/",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/",
    },  
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
    },
    {
      icon: Camera,
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
  ];

  const renderLinks = (title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, links: any[]) => (
    <div>
      <h4 className="mb-4 text-sm font-semibold tracking-wider text-white">
        {title}
      </h4>

      <ul className="space-y-2.5 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="transition-colors hover:text-purple-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative z-10 mt-12 overflow-hidden border-t border-white/10 bg-slate-950/80 pt-16 pb-8 backdrop-blur-xl">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[600px] -translate-x-1/2 bg-purple-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Information */}
          <div className="space-y-4 lg:col-span-2">
            <a
              href="/"
              aria-label="BrightHub homepage"
              className="group flex items-center gap-2.5 text-2xl font-extrabold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30">
                <div className="flex h-4 w-4 rotate-12 items-center justify-center rounded-sm bg-white">
                  <div className="h-2 w-2 rounded-[1px] bg-slate-950" />
                </div>
              </div>

              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                BrightHub
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Empowering SaaS founders, digital creators, and tech
              agencies with ultra-fast, modern WordPress themes and
              digital experiences.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Subscribe to updates
              </h5>

              <form
                onSubmit={handleSubscribe}
                className="flex max-w-sm items-center gap-2"
              >
                <div className="relative flex-1">
                  <Mail
                    aria-hidden="true"
                    className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    autoComplete="email"
                    required
                    className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pr-4 pl-9 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex items-center justify-center rounded-full bg-purple-600 p-2.5 text-white shadow-lg shadow-purple-600/30 transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {subscribed && (
                <p
                  role="status"
                  className="mt-2 text-xs font-medium text-emerald-400"
                >
                  Thanks for subscribing!
                </p>
              )}

              <p className="mt-2 text-xs text-slate-500">
                Subscribe for product updates and announcements.
              </p>
            </div>
          </div>

          {/* Product Links */}
          {renderLinks("Product", productLinks)}

          {/* Resources Links */}
          {renderLinks("Resources", resourceLinks)}

          {/* Company Links */}
          {renderLinks("Company", companyLinks)}
        </div>

        {/* Copyright & Social Links */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
          {/* Copyright */}
          <p className="flex flex-wrap items-center justify-center gap-1 text-center sm:justify-start">
            <span>
              &copy; {currentYear} BrightHub. All rights reserved.
            </span>

            <span className="mx-1">Made with</span>

            <Heart
              aria-label="love"
              className="h-3.5 w-3.5 fill-rose-500 text-rose-500"
            />

            <span>for SaaS builders.</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit BrightHub on ${name}`}
                title={name}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-purple-500/50 hover:bg-white/15 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
