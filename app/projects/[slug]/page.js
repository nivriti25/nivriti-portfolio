import { projectsData } from '@/lib/projectsData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from "lucide-react";

export default async function ProjectDetails({ params }) {
  const { slug } = await params

  const project = projectsData.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-[#f2fbff] py-28 px-6 font-inter text-text-dark select-none">
      <div className="relative mx-auto max-w-4xl">
        
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-bold text-sm uppercase mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Section: Card Wrapper */}
        <header className="rounded-3xl border border-[#b7daff] bg-white p-8 md:p-12 shadow-sm space-y-4">
          <span className="text-brand font-mono text-xs font-bold uppercase tracking-wider bg-[#cfeaff] px-2.5 py-0.5 rounded-full">
            Case Study
          </span>
          <h1 className="font-bricolage text-3xl sm:text-5xl font-black text-[#084594] leading-tight">
            {project.title}
          </h1>
          <p className="text-text-dark/85 text-base md:text-lg leading-relaxed font-medium pt-2">
            {project.project_overview}
          </p>
        </header>

        {/* Action Buttons: Live CTAs */}
        {project.slug !== "smart-blind-stick" && (
          <section className="mt-8 rounded-3xl border border-[#b7daff] bg-[#cfeaff] p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm">
            <div>
              <span className="text-brand font-mono text-xs font-bold uppercase tracking-wider">Explore</span>
              <h3 className="font-bricolage text-xl md:text-2xl font-extrabold text-brand mt-1">Experience the live product</h3>
            </div>

            <div className="flex gap-4 w-full sm:w-auto">
              {project.live_link && (
                <a 
                  href={project.live_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand hover:bg-brand-hover px-6 py-3.5 text-sm font-bold text-white shadow-[3px_3px_0px_#cfeaff] transition duration-200"
                >
                  View Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.github_link && project.slug !== "mookambika-sarees" && project.slug !== "smart-blind-stick" && (
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#b7daff] bg-white px-6 py-3.5 text-sm font-bold text-brand hover:bg-[#cfeaff]/20 shadow-[3px_3px_0px_#145AB5] transition duration-200"
                >
                  View GitHub
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              )}
            </div>
          </section>
        )}

        {/* Content sections: Problem & Solution Grid */}
        <div className="mt-8 space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#b7daff] bg-white p-8 shadow-sm">
              <h2 className="font-bricolage text-2xl font-extrabold text-[#084594] mb-4">The Problem</h2>
              <div className="text-text-dark/80 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                {project.the_problem}
              </div>
            </article>

            <article className="rounded-3xl border border-[#b7daff] bg-white p-8 shadow-sm">
              <h2 className="font-bricolage text-2xl font-extrabold text-[#084594] mb-4">The Solution</h2>
              <div className="text-text-dark/80 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                {project.the_solution}
              </div>
            </article>
          </div>

          {/* Project Demo Video Embed */}
          {project.slug === "mookambika-sarees" && (
            <section className="rounded-3xl border border-[#b7daff] bg-white p-8 md:p-12 shadow-sm space-y-6 text-left">
              <h2 className="font-bricolage text-2xl font-extrabold text-[#084594]">Interactive Walkthrough</h2>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <iframe 
                  src="https://drive.google.com/file/d/1uOlvWx9hGBwifC0eLCLlHA00hEBEoZVj/preview" 
                  className="w-full h-full border-none" 
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          {/* Project Canva Presentation Link */}
          {project.slug === "mookambika-sarees" && (
            <section className="rounded-3xl border border-[#b7daff] bg-white p-8 md:p-12 shadow-sm text-center space-y-4">
              <h2 className="font-bricolage text-2xl font-extrabold text-[#084594]">Project Case Study</h2>
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
            </section>
          )}

          {/* Key Features */}
          <section className="rounded-3xl border border-[#b7daff] bg-white p-8 shadow-sm">
            <h2 className="font-bricolage text-2xl font-extrabold text-[#084594] mb-4">Key Features</h2>
            <div className="text-text-dark/80 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
              {project.key_features}
            </div>
          </section>

          {/* Technologies Used */}
          <section className="rounded-3xl border border-[#b7daff] bg-white p-8 shadow-sm">
            <h2 className="font-bricolage text-2xl font-extrabold text-[#084594] mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies_used ? (
                project.technologies_used.split(/,|\n/).map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-[#cfeaff] text-brand text-xs md:text-sm font-semibold px-3 py-1 rounded-full border border-[#b7daff]/30"
                  >
                    {tech.trim()}
                  </span>
                ))
              ) : (
                <p className="text-text-dark/60 font-medium">No technologies specified.</p>
              )}
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="rounded-3xl border border-[#b7daff] bg-white p-8 shadow-sm">
            <h2 className="font-bricolage text-2xl font-extrabold text-[#084594] mb-4">Lessons Learned</h2>
            <div className="text-text-dark/80 text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
              {project.lessons_learned}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
