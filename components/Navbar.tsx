"use client";

import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close helper
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-md border-b border-brand-mid/20 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo-div">
          <Link 
            href="/" 
            className="font-bricolage text-2xl font-extrabold text-brand tracking-tight hover:text-brand-hover transition-colors"
          >
            Nivriti
          </Link>
        </div>

        {/* Navigation Links and Contact CTA */}
        <div className="flex items-center gap-8" ref={dropdownRef}>
          {/* Contact Badge */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-brand text-white pl-4 pr-2 py-1.5 rounded-full shadow-md hover:bg-brand-hover transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">connect</span>
              <div className="relative w-8 h-8 flex items-center justify-center bg-white text-brand rounded-full">
                {/* Rotating outer circle */}
                <div className="absolute inset-0 rounded-full border border-dashed border-brand/40 animate-spin-slow group-hover:scale-110 transition-transform duration-300" />
                <MessageSquare className="w-4 h-4 fill-brand stroke-brand" />
              </div>
            </button>

            {/* Dropdown Menu (Horizontal Row Capsule) */}
            {isOpen && (
              <div className="absolute right-0 mt-3 bg-white border border-[#b7daff] rounded-full p-1.5 shadow-lg flex flex-row items-center gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Email */}
                <a 
                  href="mailto:nivriti.varada@gmail.com"
                  className="w-9 h-9 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-600 transition-all shrink-0"
                  title="Email: nivriti.varada@gmail.com"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/nivritivarada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-all shrink-0"
                  title="LinkedIn"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com/nivriti25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-800 transition-all shrink-0"
                  title="GitHub"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}