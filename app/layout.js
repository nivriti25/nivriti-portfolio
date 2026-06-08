import "./globals.css"; // Keeps your global styling active
import Link from "next/link"; // Used for navigating without page reloads

export const metadata = {
  title: "Nivriti",
  description: "Built with Next.js and Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        background: "#050509",
      }}>
        
        {/* ======= GLOBAL HEADER ======= */}
        <header style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#111",
          color: "#fff",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
        }}>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>MyPortfolio</Link>
          </div>
          <nav style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link href="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</Link>
            <Link href="/blogs" style={{ color: "#fff", textDecoration: "none" }}>Blogs</Link>
          </nav>
        </header>

        {/* ======= MAIN PAGE CONTENT ======= */}
        {/* The {children} prop injects your projects/blogs code right here */}
        <div style={{ flex: 1, paddingTop: '96px' }}>
          {children}
        </div>

       <footer style={{
          background: '#111',
          color: '#fff',
          padding: '2rem 1rem',
          borderTop: '1px solid #222',
          textAlign: 'center',
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Get In Touch</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Contact Links */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            flexWrap: 'wrap',
            fontSize: '0.95rem' 
          }}>
            <a href="mailto:nivriti.varada@gmail.com" style={{ color: '#0070f3', textDecoration: 'none' }}>
               Email
            </a>
            <a href="https://github.com/nivriti25" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
               GitHub
            </a>
            <a href="https://www.linkedin.com/in/nivritivarada/" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
               LinkedIn
            </a>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#999' }}>
            © {new Date().getFullYear()} Nivriti Varada. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}