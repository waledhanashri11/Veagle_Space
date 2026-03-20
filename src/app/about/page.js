"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold">
            About Me
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            I am a passionate web developer who loves building modern, responsive 
            and user-friendly web applications. I specialize in technologies like 
            React, Next.js, and Tailwind CSS to create clean and interactive UI.
          </p>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Skills</h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm hover:bg-white hover:text-black transition"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Button */}
          <Link href="/contact">
            <button className="mt-6 w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
              Contact Me
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}