import Link from 'next/link'
import { supabase } from '@/lib/supabase' // Adjust the dots based on where your utils folder sits

const delayClasses = ['delay-75', 'delay-150', 'delay-300', 'delay-500']

export default async function ProjectsPage() {
  // Fetch title, slug, description, image_url, and tags from the projects table
  const { data: projects, error } = await supabase
    .from('projects')
    .select('id, title, slug, description, image_url, tags')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error.message)
    return <p className="p-8 text-zinc-300">Failed to load projects.</p>
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-zinc-500 mb-3">Projects</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100">Work</h1>
        </header>

        {projects?.length === 0 ? (
          <p className="text-center text-zinc-400">No projects found. Add some in your Supabase dashboard!</p>
        ) : (
          <section className="divide-y divide-zinc-900">
            {projects?.map((project, idx) => {
              const counter = String(idx + 1).padStart(2, '0')
              const tags = Array.isArray(project.tags)
                ? project.tags
                : typeof project.tags === 'string'
                ? project.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
                : []

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group block animate-fade-up ${delayClasses[idx % delayClasses.length]}`}
                >
                  <div className="relative flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-zinc-900 transition-all duration-300 hover:bg-zinc-900/40 px-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 lg:gap-10 flex-1">
                      <div className="min-w-[3rem] text-zinc-500 font-semibold tracking-[0.15em]">{counter}</div>
                      <div className="min-w-0">
                        <h2 className="text-2xl font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-indigo-400">
                          {project.title}
                        </h2>
                        <p className="mt-3 text-sm text-zinc-500 max-w-2xl">{project.description ?? 'No description available.'}</p>
                        {tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 flex items-center gap-4">
                      <div className="hidden lg:block relative w-36 h-24 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-300 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0">
                        {project.image_url ? (
                          <img
                            src={project.image_url}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
                            Preview
                          </div>
                        )}
                      </div>
                      <span className="text-2xl text-zinc-500 transition-all duration-300 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-indigo-400">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </section>
        )}
      </div>
    </main>
  )
}