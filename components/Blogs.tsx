const blogs = [
  {
    title: "My Journey into Full Stack Development",
    description:
      "How I started learning web development and the lessons I learned.",
    date: "June 2026",
  },
  {
    title: "Building My First E-Commerce Application",
    description:
      "Challenges, architecture decisions, and deployment experience.",
    date: "June 2026",
  },
  {
    title: "Why I Started Learning UI/UX Design",
    description:
      "Understanding users and designing better experiences.",
    date: "June 2026",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="bg-zinc-900 rounded-xl p-6 hover:scale-105 transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              {blog.date}
            </p>

            <h3 className="text-xl font-semibold mb-3">
              {blog.title}
            </h3>

            <p className="text-gray-400">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}