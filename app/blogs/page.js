import Link from 'next/link'
import { blogsData } from '@/lib/blogsData'

export default async function BlogsPage() {
  const blogs = [...blogsData];

  return (
    <main className="min-h-screen bg-[#f2fbff] py-28 px-6 select-none font-inter">
      <div className="mx-auto max-w-4xl">
        
        {/* Page Header */}
        <header className="mb-16 text-center">
          <p className="uppercase tracking-[0.25em] text-brand text-xs font-mono font-bold mb-3">LATEST WRITING & IDEAS</p>
          <h1 className="font-bricolage text-4xl sm:text-5xl font-extrabold text-[#084594] leading-tight">My Blog</h1>
        </header>

        {blogs?.length === 0 ? (
          <div className="rounded-3xl border border-[#b7daff] bg-white p-12 text-center text-text-dark/65 font-medium shadow-sm">
            No blog posts found. Check back later!
          </div>
        ) : (
          <section className="space-y-6">
            {blogs?.map((blog, idx) => {
              const published = blog.published_at 
                ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                : '';
              
              return (
                <Link 
                  key={blog.slug} 
                  href={`/blogs/${blog.slug}`} 
                  className="group block"
                >
                  <div className="border border-[#b7daff] rounded-3xl p-8 bg-white hover:bg-[#cfeaff]/20 transition-all duration-300 hover:border-brand shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="space-y-2">
                      {published && (
                        <p className="text-brand/80 font-mono text-xs font-bold uppercase tracking-wider bg-[#cfeaff] px-2.5 py-0.5 rounded-full inline-block">
                          {published}
                        </p>
                      )}
                      <h2 className="font-bricolage text-2xl font-extrabold text-brand group-hover:text-brand-hover transition-colors leading-tight">
                        {blog.title}
                      </h2>
                    </div>

                    <div className="flex items-center self-end sm:self-center">
                      <div className="w-10 h-10 rounded-full border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all transform group-hover:translate-x-1.5 duration-300">
                        <span className="text-xl leading-none">→</span>
                      </div>
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