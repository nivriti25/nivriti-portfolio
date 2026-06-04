import Link from 'next/link'
import { createClient } from '../utils/supabase' // Adjust dots if your utils folder sits elsewhere

export default async function BlogsPage() {
  const supabase = createClient()

  // Fetch only the title and slug from the blogs table
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('title, slug')
    .order('published_at', { ascending: false }) // Newest blogs first

  if (error) {
    console.error('Error fetching blogs:', error.message)
    return <p style={{ padding: '2rem' }}>Failed to load articles.</p>
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Blog Posts</h1>
      
      {blogs?.length === 0 ? (
        <p>No blog posts found. Add some in your Supabase dashboard!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {blogs?.map((blog) => (
            <li key={blog.slug} style={{ marginBottom: '1.5rem' }}>
              {/* Clicking this title routes the user to /blogs/[slug] */}
              <Link 
                href={`/blogs/${blog.slug}`} 
                style={{ 
                  fontSize: '1.5rem', 
                  color: '#0070f3', 
                  textDecoration: 'none',
                  fontWeight: 'bold' 
                }}
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}