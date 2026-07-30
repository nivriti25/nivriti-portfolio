import Hero from "../components/Hero";
import About from "../components/About";
import FocusAreas from "../components/FocusAreas";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceEducation from "../components/ExperienceEducation";
import BlogsSection from "../components/BlogsSection";
import ScrollNavbar from "../components/ScrollNavbar";
import { projectsData } from "../lib/projectsData";

export default async function Home() {
  const displayProjects = [...projectsData];

  return (
    <>
      <main className="min-h-screen bg-[#f2fbff] pb-12 overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Focus Areas Section */}
        <FocusAreas />

        {/* Experience & Education Section */}
        <ExperienceEducation />

        {/* Work / Projects Section */}
        <ProjectsSection projects={displayProjects} />

        {/* Blogs Section */}
        <BlogsSection />
      </main>

      {/* Floating bottom progress navigation bar */}
      <ScrollNavbar />
    </>
  );
}