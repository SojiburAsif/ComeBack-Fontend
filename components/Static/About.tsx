
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Mail,
  MapPin,
} from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git & GitHub",
];

const stats = [
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "∞",
    label: "Ideas",
  },
];

const values = [
  {
    icon: Code2,
    number: "01",
    title: "Clean Development",
    description:
      "I focus on writing clean, reusable and maintainable code that makes projects easier to scale and improve.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Modern Technology",
    description:
      "I enjoy working with modern technologies and continuously exploring better ways to build web applications.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Better Experiences",
    description:
      "My goal is to create fast, responsive and meaningful digital experiences that people genuinely enjoy using.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-zinc-100 blur-3xl dark:bg-zinc-900" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* ================= LEFT ================= */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
              <Sparkles size={14} />
              About Me
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              I build{" "}
              <span className="text-red-500 dark:text-red-400">
                modern
              </span>{" "}
              digital experiences.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              I&apos;m a passionate web developer who loves turning ideas into
              beautiful, fast and user-friendly web experiences. I enjoy
              learning new technologies, solving problems and building
              products that make a real difference.
            </p>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin size={16} className="text-red-500" />
              Dhaka, Bangladesh
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:gap-3 hover:bg-red-600 hover:shadow-red-500/30"
              >
                Let&apos;s Work Together
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-medium text-zinc-900 transition hover:border-red-300 hover:text-red-500 dark:border-zinc-800 dark:text-white dark:hover:border-red-800 dark:hover:text-red-400"
              >
                View My Projects
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {/* GitHub */}
              <Link
                href="https://github.com/SojiburAsif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-zinc-800 dark:text-zinc-400"
              >
                GH
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/sojibur-asif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-zinc-800 dark:text-zinc-400"
              >
                in
              </Link>

              {/* Email */}
              <Link
                href="mailto:hello@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-zinc-800 dark:text-zinc-400"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT PROFILE ================= */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Red Border */}
            <div className="absolute -inset-3 rounded-[2rem] border border-red-500/20" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              {/* Image */}
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop"
                  alt="Developer workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                {/* Available Badge */}
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                  Available for Work
                </div>

                {/* Image Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Developer • Creator • Learner
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    Creating with purpose.
                  </h2>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-900">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-3 py-4 text-center"
                  >
                    <p className="text-lg font-bold text-red-500">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="border-y border-zinc-100 bg-zinc-50 px-4 py-16 dark:border-zinc-900 dark:bg-zinc-900/40 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-500">
              My Journey
            </p>

            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Learning, building &amp; growing.
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-red-500" />
          </div>

          <div className="space-y-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
            <p>
              My journey into web development started with curiosity about how
              websites are designed and how technology can transform simple
              ideas into useful digital products.
            </p>

            <p>
              As I continued learning, I started working with modern frontend
              technologies such as React and Next.js while also exploring
              backend development. Building real-world projects taught me how
              to think beyond just writing code.
            </p>

            <p>
              Today, I am focused on becoming a stronger developer by
              continuously learning, experimenting with new ideas and improving
              the quality of everything I create.
            </p>

            <p className="border-l-2 border-red-500 pl-5 font-medium text-zinc-900 dark:text-white">
              &quot;The goal isn&apos;t just to build something that works —
              it&apos;s to build something that feels right.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                Technologies
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tools I love to work with.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              A growing collection of technologies I use to build modern,
              responsive and scalable web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-red-900 dark:hover:bg-red-950/30 dark:hover:text-red-400"
              >
                <span className="mr-2 text-xs text-red-500">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-zinc-50 px-4 py-16 dark:bg-zinc-900/40 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-500">
              What Matters
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How I approach my work.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              My approach is simple: write better code, learn continuously and
              create experiences that people enjoy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-red-900 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition duration-300 group-hover:bg-red-500 group-hover:text-white dark:bg-red-950/30 dark:text-red-400 dark:group-hover:bg-red-500 dark:group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-semibold text-zinc-300 dark:text-zinc-700">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {value.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-14 text-center text-white dark:bg-white dark:text-zinc-950 sm:px-10 sm:py-20">
          {/* Red Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-400 dark:text-red-500">
              Let&apos;s Create Something
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Have an idea? Let&apos;s turn it into reality.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 opacity-70 sm:text-base">
              I&apos;m always interested in learning, creating and working on
              meaningful digital experiences.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30"
            >
              Get In Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
