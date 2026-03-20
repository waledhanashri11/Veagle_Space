"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center">

      {/* Dark Overlay */}
      <div className="min-h-screen bg-gradient-to-br from-black/70 via-black/60 to-black/80 flex items-center justify-center px-4">

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center text-white">

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Dhanashri</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-gray-300 text-sm sm:text-lg">
            I design and build modern, responsive, and user-friendly web applications 
            using the latest technologies like React, Next.js, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

            <Link href="/about">
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
                About Me
              </button>
            </Link>

            <Link href="/contact">
              <button className="w-full sm:w-auto px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
                Contact
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}