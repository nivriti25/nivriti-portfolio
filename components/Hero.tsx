import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="text-gray-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            B Nivriti Varada
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer • AI Enthusiast • UI/UX Learner
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            I'm a Computer Science Engineering student passionate
            about building scalable web applications, AI-powered
            products, and creating meaningful user experiences.
          </p>

        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/profile.jpg"
            alt="Nivriti"
            width={320}
            height={320}
            className="rounded-full border-4 border-zinc-700 object-cover"
          />
        </div>

      </div>
    </section>
  );
}