"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", num: "01", label: "About" },
  { id: "focus", num: "02", label: "Tech Stack" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "designs", num: "04", label: "Designs" },
  { id: "blogs", num: "05", label: "Blogs" },
];

export default function ScrollNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // 1. Scroll depth tracking
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };

    // 2. Active section tracking via Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Detect section when it occupies the middle-top area
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full h-12 bg-[#cfeaff] border-t border-[#b7daff] z-40 grid grid-cols-6 font-inter select-none overflow-hidden">
      {/* Dynamic progress highlight backing */}
      <div 
        className="absolute top-0 bottom-0 left-0 bg-[#b7daff]/50 transition-all duration-100 ease-out z-0 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="relative flex items-center justify-center gap-2 h-full z-10 text-xs md:text-sm transition-all duration-300 hover:bg-[#145AB5]/5 group"
          >
            {/* Nav Number pill */}
            <span 
              className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                isActive 
                  ? "border-brand bg-brand text-white" 
                  : "border-brand/40 text-brand/80 group-hover:border-brand group-hover:text-brand"
              }`}
            >
              {sec.num}
            </span>

            {/* Nav Label text */}
            <span 
              className={`hidden sm:inline font-semibold transition-all duration-300 ${
                isActive 
                  ? "text-brand scale-105" 
                  : "text-text-dark/70 group-hover:text-brand"
              }`}
            >
              {sec.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
