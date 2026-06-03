import Navbar from "../../components/Navbar";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            Certifications
          </h1>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Full Stack Development
            </h2>

            <p className="text-gray-400 mt-3">
              Add your certifications here.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}