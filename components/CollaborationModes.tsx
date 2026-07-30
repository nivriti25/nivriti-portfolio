import Link from "next/link";
import { Check } from "lucide-react";

const modes = [
  {
    type: "Freelance & Projects",
    bgClass: "bg-[#151515] text-white border border-[#222]",
    subTitle: "Launch a custom app or revamp your current digital footprint. Ideal for MVPs, landing pages, and interactive dashboards.",
    price: "Project Basis",
    details: "Custom scope & milestones",
    features: [
      "Responsive frontend & design",
      "Robust server & API architecture",
      "CMS & Database integrations",
      "Sticker animations & visual branding",
      "Post-launch support & handoff",
    ],
    cta: "Start A Project",
    link: "mailto:nivriti.varada@gmail.com?subject=Project Inquiry",
  },
  {
    type: "Full-Time Roles",
    bgClass: "bg-[#cfeaff] text-text-dark border border-[#b7daff]",
    subTitle: "Ready to integrate with your engineering team. Bringing full-stack skills, hardware insights, and AI engineering practices.",
    price: "Full-Time Developer",
    details: "Open to remote & hybrid",
    features: [
      "Agile software engineering",
      "React/Next.js and Python ecosystems",
      "Collaborative coding & tooling",
      "System testing & unit verification",
      "Problem-solving & algorithm design",
    ],
    cta: "Hire Me",
    link: "mailto:nivriti.varada@gmail.com?subject=Job Opportunity",
  },
];

export default function CollaborationModes() {
  return (
    <section 
      id="collaborate" 
      className="bg-[#f2fbff] py-24 px-6 md:px-12 select-none border-t border-brand-mid/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="max-w-xl mb-16 text-center md:text-left">
          <h2 className="font-bricolage text-4xl md:text-5xl font-extrabold text-brand leading-none uppercase tracking-tight">
            Let’s get this show on the road
          </h2>
          <p className="font-inter text-text-dark/80 text-lg font-medium mt-2">
            Pick a collaboration model that fits your team's current scope and requirements.
          </p>
        </div>

        {/* 2 Plans + 1 Wide Custom Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
          {modes.map((mode, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm relative ${mode.bgClass}`}
            >
              <div className="space-y-6">
                <h3 className="font-bricolage text-3xl font-extrabold leading-tight">
                  {mode.type}
                </h3>
                <p className="font-inter text-sm md:text-base opacity-80 leading-relaxed font-medium">
                  {mode.subTitle}
                </p>

                {/* Price block */}
                <div className="border-t border-current/10 pt-6">
                  <div className="font-bricolage text-2xl font-bold">{mode.price}</div>
                  <div className="text-xs font-mono uppercase tracking-wider opacity-60 mt-1">{mode.details}</div>
                </div>

                {/* Features checklist */}
                <ul className="space-y-3 pt-4 border-t border-current/10">
                  {mode.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full border border-current flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-inter text-sm md:text-base font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link CTA Button */}
              <div className="pt-8 mt-auto">
                <a 
                  href={mode.link}
                  className="w-full text-center inline-block bg-brand hover:bg-brand-hover text-white font-bold py-4 px-6 rounded-2xl shadow-[4px_4px_0px_#cfeaff] transition-all uppercase tracking-wide text-sm"
                >
                  {mode.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Collaboration Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#b7daff] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-bricolage text-2xl font-extrabold text-brand">Custom Collaboration or Research?</h3>
            <p className="font-inter text-text-dark/80 text-base leading-relaxed font-medium">
              Have an academic idea, a research project in AI/IoT, or an open-source tool you want to pair-program on? Let's talk about it.
            </p>
          </div>
          <div>
            <a 
              href="mailto:nivriti.varada@gmail.com?subject=Research Collaboration Inquiry"
              className="inline-block bg-[#151515] hover:bg-[#222] text-white font-bold py-4 px-8 rounded-2xl transition-all uppercase tracking-wider text-sm shadow-[4px_4px_0px_#cfeaff]"
            >
              Get in touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
