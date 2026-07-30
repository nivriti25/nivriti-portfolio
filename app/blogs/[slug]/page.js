import { blogsData } from '@/lib/blogsData'
import Link from 'next/link'
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params }) {
  const { slug } = await params
  
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#f2fbff] flex flex-col items-center justify-center pt-24 font-inter text-text-dark select-none">
        <h2 className="font-bricolage text-2xl font-bold text-red-500">Post Not Found</h2>
        <p className="text-text-dark/65 font-medium mt-1">The blog article you are looking for does not exist.</p>
        <Link href="/?open=true#blogs" className="mt-6 text-brand hover:text-brand-hover font-bold uppercase text-sm">
          Back to Blogs
        </Link>
      </main>
    )
  }

  const published = new Date(blog.published_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-[#f2fbff] py-28 px-6 font-inter text-text-dark select-none">
      <article className="mx-auto max-w-3xl">
        
        {/* Back Link */}
        <Link 
          href="/?open=true#blogs" 
          className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-bold text-sm uppercase mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        {/* Blog Container Card */}
        <div className="rounded-3xl border border-[#b7daff] bg-white p-8 md:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-brand font-mono text-xs font-bold uppercase tracking-wider bg-[#cfeaff] px-2.5 py-0.5 rounded-full inline-block">
              {published}
            </span>
            <h1 className="font-bricolage text-3xl sm:text-5xl font-black text-[#084594] leading-tight">
              {blog.title}
            </h1>
          </div>

          <hr className="border-[#b7daff]/30" />

          {/* Article body */}
          <div className="text-text-dark/85 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap space-y-4">
            {blog.content}
          </div>
        </div>

      </article>
    </main>
  )
}