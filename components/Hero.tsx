"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fullName = "B Nivriti Varada";

function useTypeOnce(text: string, speed = 130) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, text, speed]);

  return displayed;
}

export default function Hero() {
  const typedName = useTypeOnce(fullName);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="text-gray-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 min-h-[1.2em]">
            <span
              style={{
                background: "linear-gradient(90deg, #1e3a5f, #2e6fb5, #60a5fa, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {typedName}
            </span>
            {typedName.length < fullName.length && (
              <span className="inline-block w-[3px] h-[0.8em] bg-[#60a5fa] ml-1 align-middle animate-blink" />
            )}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer • AI Enthusiast • UI/UX Learner
          </h2>

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