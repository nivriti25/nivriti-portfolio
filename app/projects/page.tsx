import Navbar from "../../components/Navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold">
                E-Commerce Platform
              </h2>

              <p className="text-gray-400 mt-3">
                Full-stack shopping application.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold">
                Finance Tracker
              </h2>

              <p className="text-gray-400 mt-3">
                Personal expense management app.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}