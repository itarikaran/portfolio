import profile from "../assets/Ari Karan.png";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 bg-red-600 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-20 right-10 h-72 w-72 bg-orange-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-red-500 font-semibold mb-3">
            JAVA FULL-STACK DEVELOPER
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ari
            <span className="text-red-500"> Karan</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
            Building scalable web applications using
            Java, Spring Boot, React and MySQL.
            Passionate about backend development,
            REST APIs and clean software architecture.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-red-500 px-6 py-3 rounded-xl hover:bg-red-500/10 transition"
            >
              Resume
            </a>

          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="https://github.com/itarikaran"
              target="_blank"
            >
              <FaGithub className="hover:text-red-500 transition" />
            </a>

            <a
              href="https://linkedin.com/in/itarikaran"
              target="_blank"
            >
              <FaLinkedin className="hover:text-red-500 transition" />
            </a>

            <a
              href="https://leetcode.com/u/itarikaran"
              target="_blank"
            >
              <SiLeetcode className="hover:text-red-500 transition" />
            </a>

            <a
              href="https://hackerrank.com/profile/itarikaran"
              target="_blank"
            >
              <FaHackerrank className="hover:text-red-500 transition" />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-red-600 rounded-full blur-3xl opacity-40"></div>

            <img
              src={profile}
              alt="Ari Karan"
              className="relative w-[320px] md:w-[420px] rounded-3xl border border-red-500 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;