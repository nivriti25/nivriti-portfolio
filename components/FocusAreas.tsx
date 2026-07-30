import { Layout, Server, Cpu, Terminal } from "lucide-react";

const techStack = [
  {
    category: "Frontend & UI Design",
    icon: <Layout className="w-6 h-6 text-brand" />,
    skills: ["React", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "Figma", "Wireframing", "Prototyping"],
  },
  {
    category: "Backend & Database",
    icon: <Server className="w-6 h-6 text-brand" />,
    skills: ["Python", "FastAPI", "PostgreSQL", "DBMS", "SQLAlchemy", "REST APIs"],
  },
  {
    category: "IoT & Hardware",
    icon: <Cpu className="w-6 h-6 text-brand" />,
    skills: ["Arduino", "ESP32", "Embedded C++", "C/C++", "Sensors & Actuators"],
  },
  {
    category: "Tools & Workflow",
    icon: <Terminal className="w-6 h-6 text-brand" />,
    skills: ["Git & GitHub", "GitHub Actions", "Linux OS", "Vercel"],
  },
];

export default function FocusAreas() {
  return (
    <section 
      id="focus" 
      className="bg-brand text-white py-24 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-bricolage text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase tracking-tight">
            My Tech Stacks
          </h2>
          <p className="font-inter text-brand-light/90 text-lg font-medium mt-4">
            A curated set of technologies and tools I actively use to design, build, and deploy digital and physical experiences.
          </p>
        </div>

        {/* 2x2 Grid of Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {techStack.map((stack, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl space-y-6 hover:bg-white/10 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#f2fbff] border border-white flex items-center justify-center rotate-[-4deg]">
                  {stack.icon}
                </div>
                <h3 className="font-bricolage text-2xl font-bold text-white leading-snug">
                  {stack.category}
                </h3>
              </div>

              {/* Badges / Tech Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {stack.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#f2fbff] text-brand border border-[#084594] px-3.5 py-1.5 rounded-xl text-sm font-semibold shadow-[2px_2px_0px_#084594] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_#084594] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
