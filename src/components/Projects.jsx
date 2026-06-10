import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import emsImage from "../assets/ems.png";

function Projects() {
  const projects = [
    {
      title: "Employee Management System",

      image: emsImage,

      description:
        "Full-stack web application built using React, Spring Boot and MySQL for managing employee records.",

      features: [
        "Create Employee",
        "Update Employee",
        "Delete Employee",
        "REST APIs",
        "MySQL Integration",
      ],

      tech: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
      ],

      github:
        "https://github.com/itarikaran",

      demo:
        "#",
    },
  ];

  return (
    <section id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-12">
          Projects
        </h2>

        <div className="space-y-10">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="grid lg:grid-cols-2 gap-8 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">
                    Features
                  </h4>

                  <ul className="space-y-2 text-zinc-400">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-red-600/20 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-red-600 px-5 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-red-500 px-5 py-3 rounded-xl hover:bg-red-500/10 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;