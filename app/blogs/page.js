import Link from 'next/link'
import { supabase } from '@/lib/supabase' // keep Supabase integration intact

const delayClasses = [
  'animation-delay-[75ms]',
  'animation-delay-[150ms]',
  'animation-delay-[225ms]',
  'animation-delay-[300ms]',
  'animation-delay-[375ms]',
]

export default async function BlogsPage() {
  // Fetch only the title and slug from the blogs table
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('title, slug, published_at')
    .order('published_at', { ascending: false }) // Newest blogs first

  if (error) {
    console.error('Error fetching blogs:', error.message)
    return <p className="p-8 text-zinc-300">Failed to load articles.</p>
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-zinc-500 mb-3">Latest thoughts</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-100">Blog</h1>
        </header>

        {blogs?.length === 0 ? (
          <p className="text-center text-zinc-400">No blog posts found. Add some in your Supabase dashboard!</p>
        ) : (
          <section className="divide-y divide-zinc-900">
            {blogs?.map((blog, idx) => {
              const published = blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''
              return (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={`group block animate-fade-up ${delayClasses[idx % delayClasses.length]}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-900 transition-colors duration-300 hover:bg-zinc-900/30 px-4 rounded-lg">
                    <div>
                      <h2 className="text-xl font-medium text-zinc-100 transition-colors duration-300 group-hover:text-indigo-400">
                        {blog.title}
                      </h2>
                      {published ? (
                        <p className="mt-2 text-sm text-zinc-500">{published}</p>
                      ) : null}
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center text-zinc-500">
                      <span className="text-2xl transition-all duration-300 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-indigo-400">
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