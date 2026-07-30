import Link from "next/link";
import { ArrowLeft, Palette, Headphones } from "lucide-react";

export const metadata = {
  title: "Visual Designs & Creative Portfolio - Nivriti",
  description: "A showcase of graphic design, branding, and Figma wireframes for the traditional saree storefront and audio gear showcase.",
};

export default function DesignsPage() {
  const designs = [
    {
      id: "traditional-shop",
      title: "Traditional Shop Website Design",
      icon: <Palette className="w-8 h-8 text-amber-800" />,
      themeColor: "from-amber-50 to-amber-100/30 border-amber-200",
      description: "Crafted the brand guidelines, color system, layout wireframes, high-fidelity UI/UX design mockups, and client-facing digital assets for the Sri Mookambika Devi Silk Sarees Centre platform.",
      videoId: "1uOlvWx9hGBwifC0eLCLlHA00hEBEoZVj",
      hasCanva: true,
    },
    {
      id: "audio-gear-showcase",
      title: "Audio Gear Showcase",
      icon: <Headphones className="w-8 h-8 text-indigo-800" />,
      themeColor: "from-indigo-50 to-indigo-100/30 border-indigo-200",
      description: "Designed a clean, modern dark-themed showcase layout centered around premium audio gear. Emphasizes sleek imagery presentation, modern typography, and structured grids.",
      videoId: "1hQNVQWn1367-aa07h08Fn40MjBKSus8n",
      hasCanva: false,
    }
  ];

  return (
    <main className="min-h-screen bg-[#f2fbff] py-24 px-6 md:px-12 select-none font-inter text-text-dark">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation back */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-bold text-sm tracking-wider uppercase transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header Header */}
        <div className="mb-20 space-y-4 text-center md:text-left">
          <h1 className="font-bricolage text-5xl md:text-6xl font-black text-[#084594] uppercase tracking-tight leading-none">
            Beyond The Code
          </h1>
          <p className="font-inter text-text-dark/70 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            A structured look at my UI/UX designs, traditional branding mockups, and creative artwork.
          </p>
        </div>

        {/* Creative Works Sections */}
        <div className="space-y-24">
          {designs.map((design) => (
            <section 
              key={design.id} 
              id={design.id} 
              className={`scroll-mt-24 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br ${design.themeColor} border flex flex-col gap-8 shadow-sm`}
            >
              {/* Info Column */}
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-[#b7daff]/30">
                    {design.icon}
                  </div>
                  <h2 className="font-bricolage text-3xl md:text-4xl font-extrabold text-[#084594] uppercase tracking-tight">
                    {design.title}
                  </h2>
                </div>

                <p className="font-inter text-text-dark/80 text-base md:text-lg font-medium leading-relaxed max-w-4xl">
                  {design.description}
                </p>
              </div>

              {/* Interactive Walkthrough Video */}
              <div className="space-y-6">
                <h4 className="font-bricolage text-lg font-bold text-[#084594] uppercase tracking-wide text-left pl-1">
                  Interface Demonstration
                </h4>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#b7daff]/40 bg-slate-50 shadow-sm">
                  <iframe 
                    src={`https://drive.google.com/file/d/${design.videoId}/preview`} 
                    className="w-full h-full border-none" 
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Optional Canva Presentation Link */}
              {design.hasCanva && (
                <div className="space-y-6">
                  <h4 className="font-bricolage text-lg font-bold text-[#084594] uppercase tracking-wide text-left pl-1">
                    Design Case Study
                  </h4>
                  <div className="rounded-3xl border border-[#b7daff] bg-white p-8 md:p-12 shadow-sm text-center space-y-4">
                    <p className="font-inter text-text-dark/80 text-sm md:text-base font-medium max-w-xl mx-auto">
                      Explore the complete high-fidelity wireframes, branding guidelines, and visual identity layout for this project directly on Canva.
                    </p>
                    <a 
                      href="https://www.canva.com/design/DAHAD05CfSY/9epDsR8Njfv3aGvh4wv9Ng/view?utm_content=DAHAD05CfSY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h51d6765add"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7d1e2e] hover:bg-[#6b1927] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-200"
                    >
                      View Presentation on Canva
                    </a>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
