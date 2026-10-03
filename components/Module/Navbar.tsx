import React from 'react'
import { ModeToggle } from '../Module/Them'

export function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-20">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-white group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
          <div className="w-4 h-4 bg-white rounded-sm rotate-12 flex items-center justify-center">
            <div className="w-2 h-2 bg-slate-950 rounded-[1px]"></div>
          </div>
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
          BrightHub
        </span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {['Demos', 'Features', 'Support', 'Documentation'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-4">
        <ModeToggle/>
        
        <a
          href="#purchase"
          className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-purple-500/20 active:scale-95"
        >
          Purchase Theme
        </a>
      </div>
    </nav>
  );
}