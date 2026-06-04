import Link from 'next/link'
import { supabase } from '@/lib/supabase' // Adjust the dots based on where your utils folder sits

export default async function ProjectsPage() {


  // Fetch title, slug, and image_url to serve as our project icon
  const { data: projects, error } = await supabase
    .from('projects')
    .select('title, slug, image_url')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error.message)
    return <p style={{ padding: '2rem' }}>Failed to load projects.</p>
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>My Projects</h1>
      
      {projects?.length === 0 ? (
        <p>No projects found. Add some in your Supabase dashboard!</p>
      ) : (
        /* This creates an icon grid container */
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {projects?.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              {/* Interactive Icon Card */}
              <div className="project-card" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid #eaeaea',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: '#fff'
              }}>
                {/* Project Icon Image / Default Placeholder */}
                {project.image_url ? (
                  <img 
                    src={project.image_url} 
                    alt={`${project.title} icon`} 
                    style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '0.75rem', borderRadius: '8px' }}
                  />
                ) : (
                  /* Fallback visual icon asset if image_url is empty */
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#0070f3', 
                    color: '#fff', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem'
                  }}>
                    {project.title.charAt(0)}
                  </div>
                )}
                
                <span style={{ fontSize: '0.95rem', fontWeight: '500', textAlign: 'center' }}>
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}