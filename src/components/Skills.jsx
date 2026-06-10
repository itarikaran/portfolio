import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST API"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "JDBC"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-28" role="region" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="A practical stack for building full product flows."
          description="Technologies I use to build modern full-stack applications with emphasis on reliability, speed, and maintainable code."
          id="skills-heading"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-red-950/10"
              role="region"
              aria-labelledby={`skills-${item.title.toLowerCase()}`}
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />

              <h3 id={`skills-${item.title.toLowerCase()}`} className="font-bold text-xl mb-5 text-white">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/8 bg-black/35 px-3 py-1 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    tabIndex="0"
                    role="status"
                    aria-label={`${skill} skill`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;