"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  project_overview: string;
  technologies_used?: string;
  github_link?: string;
  live_link?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Config for the colored background mockups for code projects
  const cardThemes = [
    {
      bgClass: "bg-[#5ca8be]", // Teal/Blue-Green for project 1
      mockup: (
        <div className="w-[85%] mx-auto mt-6 bg-white rounded-t-xl shadow-lg border border-[#b7daff]/40 overflow-hidden flex flex-col h-full">
          {/* Browser Header */}
          <div className="bg-[#f3f4f6] h-5 px-2 flex items-center gap-1 border-b border-gray-200 shrink-0">
            <div className="w-1 h-1 rounded-full bg-[#ff5f56]" />
            <div className="w-1 h-1 rounded-full bg-[#ffbd2e]" />
            <div className="w-1 h-1 rounded-full bg-[#27c93f]" />
            <div className="flex-1 bg-white h-3 rounded-md mx-4 border border-gray-100 flex items-center justify-center text-[5px] font-mono text-gray-400 select-none">
              srimookambikadevisilksareescenter.com
            </div>
          </div>
          {/* Browser Body - E-Commerce Mock */}
          <div className="p-2 bg-white flex-1 space-y-1.5 overflow-hidden text-left">
            <div className="flex justify-between items-center pb-0.5 border-b border-gray-100">
              <span className="text-[6px] font-black text-brand">SILK SAREES</span>
              <div className="flex gap-1">
                <div className="w-3 h-1 bg-brand/10 rounded-sm" />
                <div className="w-3 h-1 bg-brand/10 rounded-sm" />
              </div>
            </div>
            <div className="bg-[#cfeaff]/30 p-1.5 rounded-md text-center space-y-0.5">
              <div className="text-[7px] font-extrabold text-brand leading-tight">PREMIUM KANCHIPURAM SAREES</div>
              <div className="text-[5px] text-text-dark/60 font-medium scale-90">Serving live customers.</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="border border-gray-100 p-0.5 rounded text-center space-y-0.5">
                <div className="aspect-square bg-red-100 rounded-sm scale-95" />
                <div className="h-0.5 bg-gray-200 rounded-sm w-4 mx-auto" />
              </div>
              <div className="border border-gray-100 p-0.5 rounded text-center space-y-0.5">
                <div className="aspect-square bg-orange-100 rounded-sm scale-95" />
                <div className="h-0.5 bg-gray-200 rounded-sm w-4 mx-auto" />
              </div>
              <div className="border border-gray-100 p-0.5 rounded text-center space-y-0.5">
                <div className="aspect-square bg-amber-100 rounded-sm scale-95" />
                <div className="h-0.5 bg-gray-200 rounded-sm w-4 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      bgClass: "bg-[#d2647c]", // Soft pink/rose for project 2
      mockup: (
        <div className="w-[85%] mx-auto mt-6 bg-white rounded-t-xl shadow-lg border border-[#b7daff]/40 overflow-hidden flex flex-col h-full">
          {/* Browser Header */}
          <div className="bg-[#f3f4f6] h-5 px-2 flex items-center gap-1 border-b border-gray-200 shrink-0">
            <div className="w-1 h-1 rounded-full bg-[#ff5f56]" />
            <div className="w-1 h-1 rounded-full bg-[#ffbd2e]" />
            <div className="w-1 h-1 rounded-full bg-[#27c93f]" />
            <div className="flex-1 bg-white h-3 rounded-md mx-4 border border-gray-100 flex items-center justify-center text-[5px] font-mono text-gray-400 select-none">
              invoice-tracker.app
            </div>
          </div>
          {/* Browser Body - Invoice Tracker Dashboard Mock */}
          <div className="bg-slate-50 flex-1 flex overflow-hidden text-left">
            {/* Sidebar */}
            <div className="w-8 bg-slate-900 p-1 space-y-0.5">
              <div className="w-full h-1 bg-brand rounded-sm" />
              <div className="space-y-0.5 pt-1.5">
                <div className="w-full h-0.5 bg-white/20 rounded-sm" />
                <div className="w-full h-0.5 bg-white/20 rounded-sm" />
                <div className="w-full h-0.5 bg-white/10 rounded-sm" />
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-1.5 space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[6px] font-extrabold text-slate-800">Invoices</span>
                <span className="text-[5px] font-bold bg-[#cfeaff] text-brand px-1 py-0.2 rounded">Active</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white p-0.5 rounded border border-slate-200 space-y-0.2">
                  <div className="text-[4px] text-slate-400">Revenue</div>
                  <div className="text-[6px] font-black text-slate-800">₹45.2K</div>
                </div>
                <div className="bg-white p-0.5 rounded border border-slate-200 space-y-0.2">
                  <div className="text-[4px] text-slate-400">Overdue</div>
                  <div className="text-[6px] font-black text-rose-600">3 Overdue</div>
                </div>
              </div>
              {/* Mini chart visual */}
              <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
                <div className="flex justify-between items-end h-6 gap-0.5 border-b border-slate-100 pb-0.5">
                  <div className="bg-brand/40 w-full h-2 rounded-t-sm" />
                  <div className="bg-brand/60 w-full h-4 rounded-t-sm" />
                  <div className="bg-brand/80 w-full h-5 rounded-t-sm" />
                  <div className="bg-brand/90 w-full h-3 rounded-t-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      bgClass: "bg-[#e6ca65]", // Golden yellow for project 3
      mockup: (
        <div className="w-[85%] mx-auto mt-6 bg-zinc-950 rounded-t-xl shadow-lg border border-zinc-800 overflow-hidden flex flex-col h-full">
          {/* Editor Header */}
          <div className="bg-zinc-900 h-5 px-2 flex items-center justify-between border-b border-zinc-800 shrink-0">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[5px] font-mono text-zinc-500">smart_stick.ino</span>
            <div className="w-3" />
          </div>
          {/* Arduino Code View */}
          <div className="p-2 font-mono text-[5.5px] leading-normal text-left text-zinc-400 space-y-1 overflow-hidden flex-1">
            <div>
              <span className="text-emerald-500">#define</span> TRG 9
            </div>
            <div>
              <span className="text-emerald-500">#define</span> ECH 10
            </div>
            <div>
              <span className="text-indigo-400">void</span> <span className="text-amber-300">loop</span>() &#123;
              <div className="pl-2">
                <span className="text-indigo-400">long</span> dist = readSensor();
                <br />
                <span className="text-indigo-400">if</span> (dist &lt; <span className="text-amber-500">30</span>) &#123;
                <div className="pl-2 text-rose-400">
                  tone(BUZ, 1000);
                </div>
                &#125;
              </div>
              &#125;
            </div>
          </div>
        </div>
      )
    }
  ];

  // Config for the colored background mockups for design projects
  const designThemes = [
    {
      bgClass: "bg-[#7d1e2e]", // Deep traditional red/maroon
      mockup: (
        <div className="w-[85%] mx-auto mt-6 bg-[#fdfaf2] border-t-4 border-amber-600 rounded-t-2xl shadow-lg p-3 text-center space-y-2.5 flex flex-col h-[85%] text-left select-none">
          {/* Saree Shop Header branding */}
          <div className="border-b border-amber-600/20 pb-2 flex justify-between items-center">
            <span className="text-[6px] font-serif font-black text-amber-900 tracking-wider uppercase">Sri Mookambika Devi</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-900" />
            </div>
          </div>
          {/* Main Visual mock */}
          <div className="flex-1 flex gap-2 items-stretch min-h-0">
            {/* Saree image placeholder */}
            <div className="w-1/2 bg-amber-100/40 border border-amber-600/20 rounded p-1 flex flex-col justify-between items-center text-center">
              <span className="text-[12px] text-amber-800">🏮</span>
              <span className="text-[5px] font-semibold text-amber-900">Banarasi Katan Silk</span>
            </div>
            {/* Content list */}
            <div className="w-1/2 flex flex-col justify-between py-1">
              <div className="space-y-1">
                <div className="h-1 bg-amber-900/30 rounded w-[90%]" />
                <div className="h-1 bg-amber-900/20 rounded w-[75%]" />
                <div className="h-1 bg-amber-900/10 rounded w-[60%]" />
              </div>
              <div className="h-3 bg-amber-800 rounded flex items-center justify-center text-[5px] font-bold text-white uppercase tracking-wider">
                View Saree
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      bgClass: "bg-[#1e293b]", // Sleek dark slate for modern audio gear
      mockup: (
        <div className="w-[85%] mx-auto mt-6 bg-[#0f172a] text-white rounded-t-2xl shadow-lg border border-slate-800 p-3 text-center space-y-2.5 flex flex-col h-[85%] text-left select-none">
          {/* Audio Gear Header */}
          <div className="border-b border-slate-800/80 pb-2 flex justify-between items-center">
            <span className="text-[6px] font-mono font-bold text-slate-400 tracking-wider uppercase">Sonic Gear Co.</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          {/* Main Visual */}
          <div className="flex-1 flex gap-2 items-stretch min-h-0">
            {/* Waveform / Visual mockup */}
            <div className="w-1/2 bg-slate-800/30 border border-slate-700/55 rounded p-1 flex flex-col justify-between items-center text-center">
              <span className="text-[12px] text-slate-300">🎧</span>
              <span className="text-[5px] font-mono text-slate-400">Pro Headphones</span>
            </div>
            {/* Details */}
            <div className="w-1/2 flex flex-col justify-between py-1">
              <div className="space-y-1">
                <div className="h-1 bg-slate-700 rounded w-[85%]" />
                <div className="h-1 bg-slate-700 rounded w-[60%]" />
              </div>
              <div className="h-3 bg-emerald-600 rounded flex items-center justify-center text-[5px] font-bold text-white uppercase tracking-wider">
                Explore Sound
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="projects" 
      className="bg-[#f2fbff] py-24 px-6 md:px-12 border-t border-brand-mid/20 select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-bricolage text-4xl md:text-5xl font-black text-[#084594] uppercase tracking-tight">
            Check out what I've done
          </h2>
        </div>

        {/* Project Card List (Horizontal Scroll) */}
        <div className="flex flex-row overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth projects-scroll items-start">
          {projects.map((project, i) => {
            const theme = cardThemes[i % cardThemes.length];

            return (
              <div key={project.id} className="group w-[90%] sm:w-[450px] shrink-0 snap-start">
                {/* Clickable Card wrapper linking to details page */}
                <Link href={`/projects/${project.slug}`} className="block space-y-5">
                  {/* Colored Mockup Container Card */}
                  <div className={`${theme.bgClass} aspect-[4/3] w-full rounded-[2rem] relative overflow-hidden flex flex-col justify-end border border-black/5 shadow-sm group-hover:scale-[1.01] transition-transform duration-300`}>
                    {theme.mockup}
                  </div>

                  {/* Title & Description side-by-side grid */}
                  <div className="grid grid-cols-12 gap-3 pt-1 px-1 text-left">
                    {/* Left side: Project Title */}
                    <div className="col-span-5">
                      <h3 className="font-bricolage text-lg md:text-xl font-extrabold text-[#084594] group-hover:text-brand transition-colors leading-tight uppercase">
                        {project.title.split(" — ")[0] /* Strip off long tail if any */}
                      </h3>
                    </div>

                    {/* Right side: Project Overview & CTA Link */}
                    <div className="col-span-7 space-y-2">
                      <p className="font-inter text-text-dark/80 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                        {project.project_overview}
                      </p>
                      
                      <div className="inline-flex items-center gap-1 text-brand group-hover:text-brand-hover font-bold text-xs tracking-wide uppercase transition-colors">
                        view project details
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Centered Italic Subsection Header */}
        <div id="designs" className="mt-16 mb-12 text-center scroll-mt-24">
          <h3 className="font-bricolage text-3xl font-bold italic text-[#084594] tracking-tight">
            Beyond the Code
          </h3>
        </div>

        {/* Design Card List (Horizontal Scroll) */}
        <div className="flex flex-row overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth projects-scroll items-start">
          
          {/* Design Card 1: Traditional Shop */}
          <div className="group w-[90%] sm:w-[450px] shrink-0 snap-start">
            <Link href="/designs#traditional-shop" className="block space-y-5">
              {/* Colored Mockup Container Card */}
              <div className="bg-[#7d1e2e] aspect-[4/3] w-full rounded-[2rem] relative overflow-hidden flex flex-col justify-end border border-black/5 shadow-sm group-hover:scale-[1.01] transition-transform duration-300">
                {designThemes[0].mockup}
              </div>

              {/* Title & Description side-by-side grid */}
              <div className="grid grid-cols-12 gap-3 pt-1 px-1 text-left">
                <div className="col-span-5">
                  <h3 className="font-bricolage text-lg md:text-xl font-extrabold text-[#084594] group-hover:text-brand transition-colors leading-tight uppercase">
                    Traditional Shop
                  </h3>
                </div>
                <div className="col-span-7 space-y-2">
                  <p className="font-inter text-text-dark/80 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                    Crafted complete branding, promotional assets, high-fidelity wireframes, and UI/UX screen prototypes for the Sri Mookambika Devi Silk Sarees Centre online storefront.
                  </p>
                  <div className="inline-flex items-center gap-1 text-brand group-hover:text-brand-hover font-bold text-xs tracking-wide uppercase transition-colors">
                    view designs
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Design Card 2: Audio Gear Showcase */}
          <div className="group w-[90%] sm:w-[450px] shrink-0 snap-start">
            <Link href="/designs#audio-gear-showcase" className="block space-y-5">
              {/* Colored Mockup Container Card */}
              <div className="bg-[#1e293b] aspect-[4/3] w-full rounded-[2rem] relative overflow-hidden flex flex-col justify-end border border-black/5 shadow-sm group-hover:scale-[1.01] transition-transform duration-300">
                {designThemes[1].mockup}
              </div>

              {/* Title & Description side-by-side grid */}
              <div className="grid grid-cols-12 gap-3 pt-1 px-1 text-left">
                <div className="col-span-5">
                  <h3 className="font-bricolage text-lg md:text-xl font-extrabold text-[#084594] group-hover:text-brand transition-colors leading-tight uppercase">
                    Audio Gear Showcase
                  </h3>
                </div>
                <div className="col-span-7 space-y-2">
                  <p className="font-inter text-text-dark/80 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                    Designed a dark-themed e-commerce experience showcasing high-end headphones, speakers, and acoustic accessories. Focuses on premium layout presentation.
                  </p>
                  <div className="inline-flex items-center gap-1 text-brand group-hover:text-brand-hover font-bold text-xs tracking-wide uppercase transition-colors">
                    view designs
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
