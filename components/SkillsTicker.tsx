import { Hammer } from "lucide-react";

const skillsList = [
  "React",
  "Vite",
  "FastAPI",
  "REST APIs",
  "Tailwind CSS",
  "SQLAlchemy",
  "Supabase",
  "PostgreSQL",
  "DBMS",
  "Figma",
  "Wireframing",
  "Prototyping",
  "Git & GitHub",
  "GitHub Actions",
  "Linux",
  "Arduino/ESP32",
  "Embedded C++",
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
];

export default function SkillsTicker() {
  return (
    <section 
      id="skills" 
      className="bg-[#fcfbf7] py-24 px-6 md:px-12 relative overflow-hidden border-t border-brand-mid/20 select-none"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side Content & Callout Card */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-bricolage text-4xl md:text-5xl font-extrabold text-brand uppercase tracking-tight">
              My Skills & Stack
            </h2>
            <p className="font-inter text-text-dark/80 text-lg font-medium max-w-md">
              A comprehensive toolkit of frontend, backend, database, and hardware integrations that I use to bring ideas to life.
            </p>
          </div>

          {/* Action Card */}
          <div className="relative bg-[#145AB5] text-white p-8 rounded-3xl max-w-md shadow-lg border border-[#084594] overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
            
            <Hammer className="w-8 h-8 text-brand-light mb-4 rotate-[-10deg] group-hover:rotate-[10deg] transition-transform duration-300" />
            <h3 className="font-bricolage text-2xl font-bold mb-2">Need a custom stack?</h3>
            <p className="font-inter text-brand-light/90 text-sm leading-relaxed font-medium">
              I'm always exploring new frameworks and learning tools to fit the project needs. Let's discuss how we can adapt to your custom requirements.
            </p>
          </div>
        </div>

        {/* Right Side: Infinite Vertical Marquee Ticker */}
        <div className="relative h-[320px] md:h-[400px] overflow-hidden rounded-2xl flex items-center justify-end px-4 md:px-12 bg-[#cfeaff]/20 border border-[#b7daff]/40">
          
          {/* Top Fade Overlay */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#fcfbf7] to-transparent z-20 pointer-events-none" />
          
          {/* Bottom Fade Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fcfbf7] to-transparent z-20 pointer-events-none" />

          {/* Marquee Ticker Text */}
          <div className="absolute right-6 md:right-16 w-full text-right font-bricolage text-5xl md:text-[5.5vw] font-black text-brand leading-[1.05em] uppercase select-none overflow-hidden h-full">
            <div className="animate-scroll-vertical flex flex-col gap-1 py-12">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="hover:text-[#084594] transition-colors duration-300 py-1">
                  {skill}
                </div>
              ))}
              {/* Duplicate List for Infinite Seamless Scroll */}
              {skillsList.map((skill, idx) => (
                <div key={`dup-${idx}`} className="hover:text-[#084594] transition-colors duration-300 py-1">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
