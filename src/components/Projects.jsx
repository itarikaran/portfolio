import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import emsImage from "../assets/ems.png";

function Projects() {
  const projects = [
    {
      id: 1,
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
      tech: ["React", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/itarikaran",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24" role="region" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="projects-heading" className="text-4xl font-bold text-red-500 mb-12">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -5 }}
              className="grid lg:grid-cols-2 gap-8 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden"
              role="article"
              aria-label={`Project: ${project.title}`}
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
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

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-6" role="list">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-red-600/20 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-sm"
                        role="listitem"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`View ${project.title} on GitHub (opens in new window)`}
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-red-500 hover:bg-red-500/10 px-5 py-3 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`View ${project.title} live demo (opens in new window)`}
                  >
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;