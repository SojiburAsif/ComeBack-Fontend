import React from 'react';
import { Layers, Sparkles, ArrowRight, Zap, Headphones, Globe, Bot } from 'lucide-react';


export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-32 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300 mb-8 hover:border-white/20 transition-all duration-300 cursor-default shadow-lg shadow-black/40">
          <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950 shadow-sm shadow-emerald-500/50">
            <Layers className="w-3 h-3 text-white" />
          </div>
          <span>Made by <strong className="text-white font-semibold">Power Elite Author</strong></span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
          Build Bold SaaS Sites <br className="hidden sm:inline" />
          with{' '}
          <span className="relative inline-block text-amber-300 font-black">
            BrightHub
            {/* Custom SVG Yellow Underline Curve */}
            <svg
              className="absolute -bottom-2.5 left-0 w-full h-3 text-amber-400 overflow-visible pointer-events-none"
              viewBox="0 0 200 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 13C50 3 150 2 197 11"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          A performance-first WordPress theme tailored for ambitious SaaS, startups &amp; modern tech ventures ready to scale.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-semibold text-sm shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 fill-white/20" />
            <span>Get BrightHub Today</span>
          </a>

          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-semibold text-sm backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>See Full Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Preview Showcase Cards Grid */}
        {}
        <div className="relative mt-8 max-w-6xl mx-auto flex items-end justify-center gap-4 md:gap-6 px-2">
          
          {/* Left Preview Card */}
          <div className="hidden lg:block w-[280px] h-[260px] rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 opacity-70 hover:opacity-100">
            <div className="h-8 bg-slate-950/80 border-b border-white/5 px-3 flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="p-5 text-left flex flex-col justify-between h-[calc(100%-32px)] bg-gradient-to-br from-emerald-950/20 to-slate-950/80">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Empower Your Business</h4>
                <p className="text-xs text-slate-400">With Smarter Financial Tools</p>
              </div>
              <div className="w-full h-16 rounded-lg bg-white/5 border border-white/5 p-2 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="w-16 h-2 bg-slate-700 rounded"></div>
                  <div className="w-24 h-3 bg-emerald-500/40 rounded"></div>
                </div>
                <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40"></div>
              </div>
            </div>
          </div>

          {/* Center Featured Preview Card */}
          <div className="w-full max-w-xl h-[320px] sm:h-[360px] rounded-2xl bg-slate-900/90 border border-white/20 overflow-hidden shadow-2xl shadow-purple-950/80 backdrop-blur-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
            {/* Window Bar */}
            <div className="h-9 bg-slate-950/90 border-b border-white/10 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[11px] text-slate-400 bg-white/5 px-3 py-0.5 rounded-full border border-white/5 flex items-center gap-1">
                <Globe className="w-3 h-3 text-purple-400" />
                brighthub.app/ai-editor
              </div>
              <div className="w-12"></div>
            </div>

            {/* Mockup Canvas */}
            <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center h-[calc(100%-36px)] bg-gradient-to-b from-purple-950/30 via-slate-900/90 to-slate-950">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-4">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                Next Gen AI Assistant
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Supercharge
              </h3>
              <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 inline-flex items-center gap-2">
                <span>Your Writing with AI</span>
                <Sparkles className="w-6 h-6 text-purple-400 fill-purple-400/20" />
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-4 max-w-md">
                Generate high-converting copy in seconds. Ultra fast, tailored to your brand voice.
              </p>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="hidden lg:block w-[280px] h-[260px] rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 opacity-70 hover:opacity-100">
            <div className="h-8 bg-slate-950/80 border-b border-white/5 px-3 flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="p-5 text-left flex flex-col justify-between h-[calc(100%-32px)] bg-gradient-to-br from-orange-950/20 to-slate-950/80">
              <div>
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-3 text-orange-400">
                  <Headphones className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Smarter Support</h4>
                <p className="text-xs text-slate-400">Automated Desk Solutions</p>
              </div>
              <div className="w-full h-16 rounded-lg bg-white/5 border border-white/5 p-2 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="w-20 h-2 bg-slate-700 rounded"></div>
                  <div className="w-16 h-3 bg-orange-500/40 rounded"></div>
                </div>
                <div className="w-8 h-8 rounded bg-orange-500/20 border border-orange-500/40"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
