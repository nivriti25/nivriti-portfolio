const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern shopping application.",
  },
  {
    title: "Finance Tracker",
    desc: "Track income and expenses.",
  },
  {
    title: "Chat Application",
    desc: "Real-time messaging app.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}