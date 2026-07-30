"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { blogsData } from "@/lib/blogsData";
import { FileText, Folder, HardDrive, Clock, ChevronRight, X } from "lucide-react";

export default function BlogsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("open") === "true" || window.location.hash === "#blogs") {
        setIsOpen(true);
      }
    }
  }, []);

  return (
    <section 
      id="blogs" 
      className="bg-[#fcfbf7] py-24 px-6 md:px-12 border-t border-brand-mid/20 select-none text-left"
    >
      <div className="max-w-7xl mx-auto">
        {/* Blogs Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-bricolage text-4xl md:text-5xl font-extrabold text-[#084594] uppercase tracking-tight">
            Blogs & Thoughts
          </h2>
          <p className="font-inter text-text-dark/80 text-lg font-medium mt-2">
            Click on the document folder below to explore my recent articles.
          </p>
        </div>

        {/* MacBook Folder & Finder Window Mockup Container */}
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center mt-12">
          {!isOpen ? (
            /* Closed Folder State */
            <button 
              onClick={() => setIsOpen(true)}
              className="group flex flex-col items-center justify-center gap-4 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105"
            >
              {/* Custom styled Mac Folder SVG */}
              <div className="relative w-36 h-28 flex items-end justify-center">
                {/* Folder Back Tab */}
                <div className="absolute top-0 left-4 w-12 h-4 bg-[#8cc4fc] rounded-t-lg shadow-sm" />
                {/* Folder Front Cover */}
                <div className="w-full h-[90%] bg-gradient-to-br from-[#acd2fc] to-[#7cbcfc] rounded-2xl shadow-md border border-[#94c4fc] flex items-center justify-center relative overflow-hidden">
                  {/* Folder overlay graphics */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Folder className="w-10 h-10 text-white stroke-2 drop-shadow-sm" />
                </div>
                {/* Folder Label */}
                <div className="absolute bottom-2 bg-white/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/40 text-[9px] font-mono font-bold text-brand uppercase tracking-widest">
                  DOCS
                </div>
              </div>
              
              <div className="space-y-1 text-center">
                <span className="font-bricolage text-xl font-bold text-[#084594] group-hover:text-brand transition-colors uppercase">
                  Articles
                </span>
                <p className="text-xs font-mono text-text-dark/50 font-bold">
                  Click to open folder
                </p>
              </div>
            </button>
          ) : (
            /* Open Finder Window State */
            <div className="w-full bg-[#f3f4f6] rounded-2xl border border-[#b7daff]/60 shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 text-left">
              
              {/* Window Header (Mac Style) */}
              <div className="bg-[#e5e7eb] px-4 py-3 flex items-center justify-between border-b border-gray-200">
                {/* Left control dots */}
                <div className="flex gap-2 items-center">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] flex items-center justify-center hover:opacity-80 cursor-pointer"
                    title="Close"
                  >
                    <X className="w-2 h-2 text-red-900 stroke-[3px] opacity-0 hover:opacity-100 transition-opacity" />
                  </button>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                </div>
                
                {/* Center Title Path */}
                <span className="text-xs font-mono text-gray-500 font-bold">
                  Nivriti &gt; Documents &gt; Articles
                </span>
                
                {/* Right Spacer */}
                <div className="w-14" />
              </div>

              {/* Finder Body Layout */}
              <div className="grid grid-cols-12 h-[340px]">
                
                {/* Finder Sidebar */}
                <div className="col-span-3 bg-[#e5e7eb]/45 border-r border-gray-200/60 p-3 space-y-4 font-mono text-[10px] font-bold text-gray-500">
                  <div className="space-y-1.5">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 block px-2">Favorites</span>
                    <button 
                      onClick={() => setActiveTab("all")}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-left ${activeTab === "all" ? "bg-[#cfeaff] text-brand" : "hover:bg-gray-200/50"}`}
                    >
                      <HardDrive className="w-3.5 h-3.5" />
                      <span>All Blogs</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab("recent")}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-left ${activeTab === "recent" ? "bg-[#cfeaff] text-brand" : "hover:bg-gray-200/50"}`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Recent</span>
                    </button>
                  </div>
                </div>

                {/* Main Folder Panel */}
                <div className="col-span-9 bg-white p-4 overflow-y-auto space-y-1.5 blogs-scroll">
                  <div className="grid grid-cols-12 text-[9px] font-mono text-gray-400 border-b border-gray-100 pb-1 mb-2 px-2">
                    <span className="col-span-6 font-bold uppercase">Name</span>
                    <span className="col-span-3 font-bold uppercase text-right">Date Modified</span>
                    <span className="col-span-3 font-bold uppercase text-right">Size</span>
                  </div>

                  {blogsData
                    .filter((blog) => {
                      if (activeTab === "recent") {
                        // Just an example filter, could filter by date
                        return new Date(blog.published_at) > new Date("2026-07-26T00:00:00Z");
                      }
                      return true;
                    })
                    .map((blog, idx) => {
                      const fileExt = idx % 2 === 0 ? ".txt" : ".md";
                      const size = idx % 2 === 0 ? "1.4 KB" : "1.8 KB";
                      const dateStr = new Date(blog.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      });

                      return (
                        <Link 
                          key={blog.slug}
                          href={`/blogs/${blog.slug}`}
                          className="grid grid-cols-12 items-center text-xs font-medium text-text-dark hover:bg-[#cfeaff]/30 px-2 py-2.5 rounded-xl border border-transparent hover:border-[#b7daff]/30 transition-all group"
                        >
                          <div className="col-span-6 flex items-center gap-2.5 min-w-0">
                            <FileText className="w-4 h-4 text-brand shrink-0" />
                            <span className="truncate group-hover:text-brand font-semibold">{blog.title + fileExt}</span>
                          </div>
                          <span className="col-span-3 text-right font-mono text-[10px] text-text-dark/50">
                            {dateStr}
                          </span>
                          <span className="col-span-3 text-right font-mono text-[10px] text-text-dark/50 flex items-center justify-end gap-1.5">
                            <span>{size}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </Link>
                      );
                    })}

                  {blogsData.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12 space-y-1">
                      <Folder className="w-8 h-8 text-gray-300" />
                      <span className="text-xs font-mono">This folder is empty</span>
                    </div>
                  )}
                </div>

              </div>
              
              {/* Window Footer Status Bar */}
              <div className="bg-[#e5e7eb] px-4 py-1.5 flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-gray-200 select-none">
                <span>{blogsData.length} items, 4.2 GB available</span>
                <span>Secure mounted volume</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
