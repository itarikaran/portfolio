import profile from "../assets/Ari Karan.png";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

function Hero() {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/itarikaran", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/itarikaran", label: "LinkedIn" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/itarikaran", label: "LeetCode" },
    { icon: FaHackerrank, url: "https://hackerrank.com/profile/itarikaran", label: "HackerRank" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero section">
      {/* Decorative background glows */}
      <div aria-hidden="true" className="absolute top-20 left-10 h-72 w-72 bg-red-600 rounded-full blur-[150px] opacity-20"></div>
      <div aria-hidden="true" className="absolute bottom-20 right-10 h-72 w-72 bg-red-600 rounded-full blur-[150px] opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm mb-6" role="status">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-500"></span>
            Available for Internships & Full-Time Roles
          </div>

          <p className="text-red-500 font-semibold tracking-widest uppercase mb-4" aria-label="Job title">
            Java Full-Stack Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Ari{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Karan
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-xl leading-relaxed max-w-xl">
            Building scalable web applications using Java,
            Spring Boot, React and MySQL.
            Passionate about backend development,
            REST APIs and clean software architecture.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Navigate to projects section"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-red-500 px-7 py-3 rounded-xl hover:bg-red-500/10 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Download resume (opens in new window)"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <nav className="flex gap-6 mt-10 text-2xl" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
                aria-label={`Visit my ${label} profile`}
                title={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer Gradient Border */}
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-red-500 to-orange-500">
              <img
                src={profile}
                alt="Ari Karan - Full-Stack Developer"
                className="w-[320px] md:w-[420px] rounded-3xl bg-black"
                loading="lazy"
              />
            </div>

            {/* Glow effect */}
            <div aria-hidden="true" className="absolute inset-0 bg-red-600 blur-3xl opacity-20 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;