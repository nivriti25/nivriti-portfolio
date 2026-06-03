const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Git",
  "Figma",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-zinc-900 p-4 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}