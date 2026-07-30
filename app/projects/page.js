import Link from 'next/link'
import { projectsData } from '@/lib/projectsData'

const delayClasses = ['delay-75', 'delay-150', 'delay-300', 'delay-500']

export default async function ProjectsPage() {
  const projects = [...projectsData];

  return (
    <main className="min-h-screen bg-[#f2fbff] py-28 px-6 select-none font-inter">
      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.25em] text-brand text-xs font-mono font-bold mb-3">
            PORTFOLIO CASE STUDIES
          </p>
          <h1 className="font-bricolage text-4xl sm:text-5xl font-extrabold text-[#084594] leading-tight">
            Selected Projects
          </h1>
        </div>

        {/* Project Card List */}
        <div className="space-y-6">
          {projects?.map((project, index) => {
            const techList = project.technologies_used
              ? project.technologies_used.split(/,|\n/).map((t) => t.trim())
              : [];

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="border border-[#b7daff] rounded-3xl p-8 bg-white hover:bg-[#cfeaff]/20 transition-all duration-300 hover:border-brand shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  <div className="space-y-3 flex-1">
                    <span className="text-brand font-mono text-xs font-bold uppercase tracking-wider bg-[#cfeaff] px-2.5 py-0.5 rounded-full">
                      CASE STUDY #{String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <h2 className="font-bricolage text-2xl font-extrabold text-brand group-hover:text-brand-hover transition-colors leading-tight">
                      {project.title}
                    </h2>
                    
                    <p className="text-text-dark/80 text-sm md:text-base leading-relaxed font-medium">
                      {project.project_overview}
                    </p>

                    {/* Technologies list inside list page */}
                    {techList.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {techList.slice(0, 4).map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="bg-[#cfeaff]/60 text-brand text-xs font-semibold px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center self-end md:self-center">
                    <div className="w-10 h-10 rounded-full border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all transform group-hover:translate-x-1.5 duration-300">
                      <span className="text-xl leading-none">→</span>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  )
}