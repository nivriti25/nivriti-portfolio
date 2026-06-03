import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Nivriti
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/certifications">Certifications</Link>
        </div>
      </div>
    </nav>
  );
}