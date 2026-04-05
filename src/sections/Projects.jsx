import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description: "Full-stack CRUD application with REST APIs.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
      image: "EMS view logo.png",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind"],
      github: "#",
      demo: "#",
      image: "AK view logo.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent blur-2xl"></div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Image Container (FIXED) */}
            <div className="w-full aspect-[3/2] overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
              
              <h3 className="text-xl font-semibold">{project.title}</h3>
              
              <p className="text-sm text-gray-300 mt-2">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg"
                >
                  <FaGithub /> Code
                </motion.a>

                <motion.a
                  href={project.demo}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-red-600 rounded-lg shadow-lg shadow-red-600/30"
                >
                  <FaExternalLinkAlt /> Live
                </motion.a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;