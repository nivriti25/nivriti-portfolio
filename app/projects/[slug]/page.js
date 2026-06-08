import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProjectDetails({ params }) {
  const { slug } = await params

  // Fetch all project fields from Supabase
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !project) return notFound()

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-900/70 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Back link */}
        <Link href="/projects" className="inline-flex items-center text-zinc-400 hover:text-white mb-6">
          ← Back to Projects
        </Link>

        {/* Hero Section: title and overview */}
        <header className="rounded-2xl border border-white/6 bg-zinc-900/40 p-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-indigo-400/80">Case Study</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{project.title}</h1>

            <p className="mt-6 max-w-2xl text-lg leading-7 text-zinc-300">{project.project_overview}</p>
          </div>
        </header>

        {/* Live CTA - moved up */}
        <section className="mt-6 rounded-2xl border border-white/6 bg-gradient-to-r from-zinc-900/60 to-zinc-950/60 p-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-indigo-400">Explore</p>
            <h3 className="mt-2 text-2xl font-semibold">Experience the live product</h3>
          </div>

          <div className="flex gap-3">
            {project.live_link && (
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 transition">View Live Demo</a>
            )}

            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900/60 transition">View GitHub</a>
            )}
          </div>
        </section>

        {/* Content sections: Problem & Solution */}
        <div className="mt-10 space-y-8">
          <section className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/6 bg-zinc-900/40 p-6">
              <h2 className="text-xl font-semibold text-indigo-400">The Problem</h2>
              <div className="mt-3 text-zinc-300 leading-7 whitespace-pre-line">{project.the_problem}</div>
            </article>

            <article className="rounded-2xl border border-white/6 bg-zinc-900/40 p-6">
              <h2 className="text-xl font-semibold text-indigo-400">The Solution</h2>
              <div className="mt-3 text-zinc-300 leading-7 whitespace-pre-line">{project.the_solution}</div>
            </article>
          </section>

          {/* Key Features */}
          <section className="rounded-2xl border border-white/6 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">Key Features</h2>
            <div className="mt-4 text-zinc-300 leading-7 whitespace-pre-line">{project.key_features}</div>
          </section>

          {/* Technologies Used */}
          <section className="rounded-2xl border border-white/6 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">Technologies Used</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies_used ? (
                project.technologies_used.split(/,|\n/).map((t, i) => (
                  <span key={i} className="rounded-full bg-zinc-800/60 px-3 py-1 text-sm text-zinc-200 border border-white/6">{t.trim()}</span>
                ))
              ) : (
                <p className="text-zinc-300">No technologies specified.</p>
              )}
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="rounded-2xl border border-white/6 bg-zinc-900/40 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">Lessons Learned</h2>
            <div className="mt-3 text-zinc-300 leading-7 whitespace-pre-line">{project.lessons_learned}</div>
          </section>

        </div>
      </div>
    </main>
  )
}
