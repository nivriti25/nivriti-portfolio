"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const name = "B Nivriti Varada";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(name.slice(0, index + 1));
      index++;
      if (index >= name.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-[#f2fbff] pt-28 pb-16 px-6 md:px-12 overflow-hidden select-none">

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full relative z-10">

        {/* Top Info & Down Arrow */}
        <div className="flex flex-col md:flex-row justify-end items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4 ml-auto">
            <div className="w-12 h-12 rounded-full border-2 border-brand flex items-center justify-center text-brand animate-bounce-slow">
              <ArrowDown className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand font-bold">Scroll Down</span>
          </div>
        </div>

        {/* Giant Hero Title */}
        <div className="w-full mt-auto relative">
          <div className="text-left">
            {/* Sub-name indicator */}
            <div className="inline-block bg-brand text-white text-xs md:text-sm font-mono uppercase tracking-widest px-4 py-1.5 rounded-md mb-6 rotate-[-1deg] shadow-[2px_2px_0px_#084594]">
              {typedName || "Nivriti"}
              <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
            </div>

            <h1 className="font-bricolage text-[5vw] md:text-[6vw] font-semibold leading-[1.05em] tracking-tight text-brand uppercase">
              <span className="block whitespace-nowrap">ui/ux designing.</span>
              <span className="block whitespace-nowrap">full stack developer.</span>
              <span className="block whitespace-nowrap text-[#084594]">learning.</span>
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
}