import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand text-white py-16 px-6 md:px-12 border-t border-brand-hover">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 border-b border-white/10 pb-12">
          {/* Logo & Bio Column */}
          <div className="md:col-span-1 space-y-4">
            <Link 
              href="/" 
              className="font-bricolage text-3xl font-extrabold text-white tracking-tight hover:text-brand-light transition-colors"
            >
              Nivriti
            </Link>
            <p className="text-brand-light/80 text-sm leading-relaxed max-w-xs">
              Third-year B.Tech Computer Science student at Shiv Nadar University, Chennai, focusing on full-stack development and AI engineering.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-brand-light/60 font-bold mb-2">Get In Touch</h4>
            <a 
              href="mailto:nivriti.varada@gmail.com" 
              className="text-white hover:text-brand-light text-sm transition-colors break-words"
            >
              nivriti.varada@gmail.com
            </a>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-brand-light/60 font-bold mb-2">Connect</h4>
            <a 
              href="https://github.com/nivriti25" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-brand-light text-sm transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nivritivarada/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-brand-light text-sm transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Sitemap Column */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-brand-light/60 font-bold mb-2">Sitemap</h4>
            <Link href="/" className="text-white hover:text-brand-light text-sm transition-colors">Home</Link>
            <Link href="/#about" className="text-white hover:text-brand-light text-sm transition-colors">About</Link>
            <Link href="/#focus" className="text-white hover:text-brand-light text-sm transition-colors">Tech Stack</Link>
            <Link href="/#projects" className="text-white hover:text-brand-light text-sm transition-colors">Projects</Link>
            <Link href="/designs" className="text-white hover:text-brand-light text-sm transition-colors">Designs</Link>
            <Link href="/#blogs" className="text-white hover:text-brand-light text-sm transition-colors">Blogs</Link>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-light/60 gap-4">
          <p>© {new Date().getFullYear()} Nivriti Varada. All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
