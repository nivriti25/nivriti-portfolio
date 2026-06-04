import Link from 'next/link'
import { supabase } from '@/lib/supabase' // Step back two folders to find your utils connection

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params
  

  // Find the exact project matching this URL slug
  const { data: project, error } = await supabase
    .from('projects')
    .select('title, description, live_link, image_url, tags')
    .eq('slug', slug)
    .single()

  if (error || !project) {
    return (
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p>The project details you are looking for do not exist.</p>
        <Link href="/projects" style={{ color: '#0070f3' }}>Back to Projects</Link>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/projects" style={{ color: '#0070f3', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Back to Projects
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        {project.image_url && (
          <img 
            src={project.image_url} 
            alt={project.title} 
            style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '12px' }}
          />
        )}
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>{project.title}</h1>
      </div>

      {/* Tags Array Display */}
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              backgroundColor: '#f0f0f0',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.85rem',
              color: '#444'
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', marginBottom: '2rem' }}>
        {project.description}
      </p>

      {project.live_link && (
        <a 
          href={project.live_link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Launch Live Project 🚀
        </a>
      )}
    </main>
  )
}