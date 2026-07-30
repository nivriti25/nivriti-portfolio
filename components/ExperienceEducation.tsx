"use client";

import React, { useState } from "react";
import { Check, ArrowRightLeft } from "lucide-react";

export default function ExperienceEducation() {
  const [isWorkFlipped, setIsWorkFlipped] = useState(false);
  const [isDesignFlipped, setIsDesignFlipped] = useState(false);

  return (
    <section
      id="experience"
      className="bg-[#fcfbf7] py-24 px-6 md:px-12 border-t border-brand-mid/20 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-bricolage text-4xl md:text-5xl font-extrabold text-brand uppercase tracking-tight">
            Work & Creative Experience
          </h2>
          <p className="font-inter text-text-dark/80 text-lg font-medium mt-2">
            Click on the cards to flip and view details of my duties & impact.
          </p>
        </div>

        {/* 2-Column Grid for Experience & Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Work Experience Card Container */}
          <div 
            onClick={() => setIsWorkFlipped(!isWorkFlipped)}
            className="w-full h-[460px] perspective-1000 cursor-pointer"
          >
            <div className={`inner-card w-full h-full relative transform-style-3d transition-transform duration-700 ${isWorkFlipped ? "rotate-y-180" : ""}`}>
              
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden bg-[#cfeaff] rounded-[2rem] border border-[#b7daff] p-8 md:p-10 shadow-sm flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Professional</span>
                    <h3 className="font-bricolage text-3xl font-extrabold text-text-dark leading-tight mt-1">Work Experience</h3>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bricolage text-2xl font-bold text-text-dark leading-tight">
                      SDE Intern
                    </h4>
                    <p className="font-inter text-brand font-semibold text-base">
                      Synergy Maritime Private Limited
                    </p>
                    <p className="font-mono text-xs font-bold text-text-dark/60">
                      May 2026 – Jun 2026
                    </p>
                  </div>

                  <p className="font-inter text-text-dark/80 text-base md:text-lg leading-relaxed font-medium">
                    Contributed to full-stack BI analytics projects within a global ship management operator. Focused on database integrations and pattern analytics.
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-brand/10">
                  <span className="font-mono text-xs text-text-dark/60">
                    📍 Chennai, India
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-brand font-bold text-xs uppercase tracking-wider">
                    <span>Click to Flip</span>
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden bg-[#e0e7ff] rounded-[2rem] border border-[#c7d2fe] p-8 md:p-10 shadow-sm flex flex-col justify-between rotate-y-180 text-left">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Impact</span>
                    <h3 className="font-bricolage text-2xl font-extrabold text-text-dark leading-tight mt-1">Key Duties & Contributions</h3>
                  </div>

                  {/* Duties list */}
                  <ul className="space-y-3 font-inter text-text-dark/85 text-sm md:text-base font-semibold">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Integrated relational databases for reporting platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Experimented with vessel tracking using live AIS data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Analyzed company fleet movement patterns for BI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Collaborated directly with lead engineers & analysts</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-indigo-200/50">
                  <span className="font-mono text-xs text-text-dark/60">
                    📍 Chennai, India
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                    <span>Click to Flip</span>
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Design & Branding Card Container */}
          <div 
            onClick={() => setIsDesignFlipped(!isDesignFlipped)}
            className="w-full h-[460px] perspective-1000 cursor-pointer"
          >
            <div className={`inner-card w-full h-full relative transform-style-3d transition-transform duration-700 ${isDesignFlipped ? "rotate-y-180" : ""}`}>
              
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden bg-[#cfeaff] rounded-[2rem] border border-[#b7daff] p-8 md:p-10 shadow-sm flex flex-col justify-between text-left">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-yellow-700 uppercase tracking-wider">Creative</span>
                    <h3 className="font-bricolage text-3xl font-extrabold text-text-dark leading-tight mt-1">Design & Branding</h3>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bricolage text-2xl font-bold text-text-dark leading-tight">
                      Design & Identity Contributor
                    </h4>
                    <p className="font-inter text-brand font-semibold text-base">
                      Local Retail
                    </p>
                    <p className="font-mono text-xs font-bold text-text-dark/60">
                      2024 – Present
                    </p>
                  </div>

                  <p className="font-inter text-text-dark/80 text-base md:text-lg leading-relaxed font-medium">
                    Collaborated on branding assets and visual materials for local retail initiatives. Crafted promotional items and digital presence designs.
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-brand/10">
                  <span className="font-mono text-xs text-text-dark/60">
                    📍 Chennai, India
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-brand font-bold text-xs uppercase tracking-wider">
                    <span>Click to Flip</span>
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden bg-[#ffedd5] rounded-[2rem] border border-[#fed7aa] p-8 md:p-10 shadow-sm flex flex-col justify-between rotate-y-180 text-left">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-yellow-700 uppercase tracking-wider">Impact</span>
                    <h3 className="font-bricolage text-2xl font-extrabold text-text-dark leading-tight mt-1">Key Duties & Contributions</h3>
                  </div>

                  {/* Duties list */}
                  <ul className="space-y-3 font-inter text-text-dark/85 text-sm md:text-base font-semibold">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Designed, developed, and deployed an e-commerce website for the local saree shop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Traditional Retail: Developed festive posters for a saree shop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Designed interactive Instagram carousels for social targeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>Focused on layout hierarchy, readability, and engagement</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-amber-200/50">
                  <span className="font-mono text-xs text-text-dark/60">
                    📍 Chennai, India
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase tracking-wider">
                    <span>Click to Flip</span>
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
