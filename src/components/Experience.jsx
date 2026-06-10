import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-24" role="region" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="experience-heading" className="text-4xl font-bold text-red-500 mb-12">
          Experience
        </h2>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative border-l-2 border-red-500 pl-8"
          role="article"
        >
          {/* Timeline marker */}
          <div aria-hidden="true" className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-red-500"></div>

          <h3 className="text-2xl font-semibold">
            Java Full-Stack Intern
          </h3>

          <p className="text-red-400 mt-1" aria-label="Company name">
            Roriri Software Solutions
          </p>

          <p className="text-zinc-500 mt-1" aria-label="Duration">
            Dec 2025
          </p>

          <p className="text-zinc-400 mt-4 leading-relaxed">
            Worked on responsive web applications using
            Java, Spring Boot and React. Used Git for
            version control and collaborated on feature
            development and bug fixing.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;