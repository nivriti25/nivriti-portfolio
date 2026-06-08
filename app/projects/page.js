import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const delayClasses = ['delay-75', 'delay-150', 'delay-300', 'delay-500']

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select(`
      id,
      title,
      slug,
      project_overview,
      technologies_used,
      github_link,
      live_link
    `)
    .order('id', { ascending: true })

  if (error) {
    console.error(error)

    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-red-400">
          Failed to load projects
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold text-white mx-auto">
            My Projects
          </h1>
        </div>

        <div className="space-y-6">
          {projects?.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group block animate-fade-up ${delayClasses[index % delayClasses.length]}`}
            >
              <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30 hover:bg-zinc-900 transition-all duration-300 hover:border-indigo-500">

                <div className="flex items-center justify-between gap-8">

                  <div className="flex-1">

                    <span className="text-zinc-500 text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h2>

                  </div>

                  <div className="hidden md:flex items-center">
                    <span className="text-3xl text-zinc-600 group-hover:text-indigo-400 transition-all group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}