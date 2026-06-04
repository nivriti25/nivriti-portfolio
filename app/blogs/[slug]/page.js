import { supabase } from '@/lib/supabase' // Step back two directories to reach utils

export default async function BlogPost({ params }) {
  // Next.js passes the dynamic URL identifier via params
  const { slug } = await params
  
  // Match the row where the 'slug' column equals our URL parameter
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('title, content, published_at')
    .eq('slug', slug)
    .single() // We only expect one specific post

  if (error || !blog) {
    return (
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <p>The blog article you are looking for does not exist.</p>
      </main>
    )
  }

  return (
    <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{blog.title}</h1>
      
      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Published on: {new Date(blog.published_at).toLocaleDateString()}
      </p>

      {/* pre-wrap preserves line breaks and formatting from your Supabase dashboard */}
      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '1.1rem' }}>
        {blog.content}
      </div>
    </article>
  )
}