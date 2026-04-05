import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden px-6 md:px-12"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent blur-3xl"></div>

      {/* Floating Glow */}
      <motion.div
        className="absolute w-64 h-64 md:w-72 md:h-72 bg-red-500/20 rounded-full blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{ x: 100, y: 50 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* Title */}
          <motion.div
            className="text-sm md:text-lg text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I'm
          </motion.div>

          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white">Ari </span>
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">
              Karan
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg mt-4 text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Aspiring Software Developer | Java • React • Spring Boot
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-5 py-3 text-sm md:text-base min-h-[44px] bg-red-600 rounded-xl shadow-lg shadow-red-600/30 hover:scale-105 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="px-5 py-3 text-sm md:text-base min-h-[44px] border border-gray-600 rounded-xl hover:bg-gray-800 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="px-5 py-3 text-sm md:text-base min-h-[44px] border border-gray-600 rounded-xl hover:bg-gray-800 transition"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 text-sm md:text-base min-h-[44px] bg-gray-800 rounded-xl hover:bg-gray-700 transition"
            >
              Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-6 flex gap-5 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/itarikaran"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/itarikaran"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>

            {/* Image */}
            <img
              src="public/AK.png"
              alt="Ari Karan"
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover rounded-full border-4 border-red-500/30"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;