import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent blur-2xl"></div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="mb-4">
          I am a Computer Science student focused on becoming a software developer,
          with a strong interest in building scalable web applications.
        </p>

        <p className="mb-4">
          I work primarily with <span className="text-red-400">Java, Spring Boot, and React</span>,
          and have experience developing full-stack applications with REST APIs
          and database integration.
        </p>

        <p>
          Currently, I am improving my problem-solving skills and building projects
          to strengthen my fundamentals and prepare for software development roles.
        </p>
      </motion.div>
    </section>
  );
}

export default About;