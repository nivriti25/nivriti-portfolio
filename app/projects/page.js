// 1. Only import the Supabase connection utility
import { createClient } from '@/lib/supabase'

export default async function ProjectsPage() {
  
  // 2. Connect to your Supabase backend
  const supabase = createClient()

  // 3. Fetch data ONLY from your 'projects' table 
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

  if (error) {
    console.error('Error fetching projects:', error)
  }

  // 4. Return a layout that only displays your project details
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      
      <section>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          My Projects
        </h1>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects?.map((project) => (
            <div 
              key={project.id} 
              style={{ border: '1px solid #ccc', padding: '1.5rem', borderRadius: '8px' }}
            >
              <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>
                {project.title}
              </h2>
              <p style={{ color: '#555', margin: '0 0 1rem 0' }}>
                {project.description}
              </p>
              
              {/* Optional: Add links or tags if you populated them in your database [cite: 7, 56] */}
              {project.live_link && (
                <a 
                  href={project.live_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '500' }}
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}