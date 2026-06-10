import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

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
    <section id="projects" className="py-24 lg:py-28" role="region" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects with real product intent."
          description="A look at the applications I’ve built to practice full-stack engineering, design clarity, and responsive implementation."
          id="projects-heading"
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -6 }}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0 overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/20"
              role="article"
              aria-label={`Project: ${project.title}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden min-h-[260px] lg:min-h-[100%]">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img
                  src={project.image}
                  alt={`${project.title} - Screenshot`}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-200 backdrop-blur-xl">
                  Featured app
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
                      Features
                    </h4>

                    <ul className="space-y-3 text-zinc-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-8" role="list">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-black/35 px-3 py-1 text-sm text-zinc-200"
                        role="listitem"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4 mt-10 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label={`View ${project.title} on GitHub (opens in new window)`}
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
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