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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pt-32" aria-label="Hero section">
      <div aria-hidden="true" className="absolute top-20 left-10 h-72 w-72 bg-red-600 rounded-full blur-[160px] opacity-15"></div>
      <div aria-hidden="true" className="absolute bottom-20 right-10 h-72 w-72 bg-orange-500 rounded-full blur-[180px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-200 text-sm mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]" role="status">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.8)]"></span>
            Open for internships and full-time roles
          </div>

          <p className="text-red-400 font-semibold tracking-[0.35em] uppercase mb-5 text-sm" aria-label="Job title">
            Java Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] max-w-[12ch]">
            Ari{' '}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Karan
            </span>
          </h1>

          <p className="mt-6 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-xl">
            Building fast, scalable web applications with Java, Spring Boot, React, and MySQL.
            Focused on clean architecture, backend systems, and polished user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-white text-black hover:bg-zinc-200 px-7 py-3 rounded-full font-semibold transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Navigate to projects section"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 bg-white/5 px-7 py-3 rounded-full hover:bg-white/10 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Download resume (opens in new window)"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <nav className="flex flex-wrap gap-3 mt-10" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:-translate-y-0.5 hover:border-red-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={`Visit my ${label} profile`}
                title={label}
              >
                <Icon aria-hidden="true" className="text-lg" />
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 blur-3xl"></div>

            <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-white/20 via-red-500/50 to-orange-500/40 shadow-2xl shadow-red-950/20">
              <img
                src={profile}
                alt="Ari Karan - Full-Stack Developer"
                className="w-[300px] sm:w-[360px] lg:w-[430px] rounded-[1.9rem] bg-black object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Focused on</p>
              <p className="mt-1 font-semibold text-white">Backend systems and clean UI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;