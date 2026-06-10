import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-28" role="region" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional context and hands-on delivery."
          description="A snapshot of recent work where I contributed to responsive interfaces, backend flows, and collaboration across the stack."
          id="experience-heading"
        />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 lg:p-10 pl-8 backdrop-blur-xl shadow-2xl shadow-black/10"
          role="article"
        >
          <div aria-hidden="true" className="absolute left-0 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-red-500 to-transparent"></div>
          <div aria-hidden="true" className="absolute left-[0px] top-10 h-5 w-5 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]"></div>

          <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold mb-4">role</p>

          <h3 className="text-2xl font-semibold text-white">
            Java Full-Stack Intern
          </h3>

          <p className="text-red-300 mt-2" aria-label="Company name">
            Roriri Software Solutions
          </p>

          <p className="text-zinc-500 mt-2" aria-label="Duration">
            Dec 2025
          </p>

          <p className="text-zinc-300 mt-6 leading-relaxed max-w-3xl">
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