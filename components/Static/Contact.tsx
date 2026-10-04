"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  User,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-white px-4 py-16 text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
            <Sparkles size={14} />
            Get In Touch
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="text-red-500 dark:text-red-400">
              Talk
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base">
            Have a question, idea, or something you'd like to discuss?
            Send me a message and I'll get back to you.
          </p>
        </div>

        {/* Form Wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 sm:p-8 lg:p-12">
          {/* Red Decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl dark:bg-red-500/10" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl dark:bg-red-500/10" />

          <div className="relative">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-red-500">
                Contact Form
              </p>

              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Send me a message
              </h2>

              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Fill out the form below and share your thoughts with me.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to talk about?"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-red-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-red-500"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-zinc-400 dark:text-zinc-500">
                  I'll try to respond as soon as possible.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:gap-3 hover:bg-red-600 hover:shadow-red-500/30 active:scale-[0.98]"
                >
                  Send Message

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>

            {/* Bottom Line */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800 sm:flex-row">
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                Prefer email?
              </p>

              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
              >
                hello@example.com
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Back Home */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400"
          >
            Back to Home
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}