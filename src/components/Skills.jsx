import { motion } from "framer-motion";

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
    <section id="skills" className="py-20" role="region" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="skills-heading" className="text-4xl font-bold text-red-500 mb-3">
          Skills
        </h2>

        <p className="text-zinc-500 mb-10">
          Technologies I use to build modern full-stack applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="
                bg-zinc-900/80
                backdrop-blur-md
                border border-zinc-800
                rounded-2xl
                p-6
                hover:border-red-500/30
                transition-all duration-300
              "
              role="region"
              aria-labelledby={`skills-${item.title.toLowerCase()}`}
            >
              <h3 id={`skills-${item.title.toLowerCase()}`} className="font-bold text-xl mb-5">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1
                      rounded-full
                      bg-red-500/10
                      border border-red-500/20
                      text-red-400
                      text-sm
                      focus:outline-none focus:ring-2 focus:ring-red-500
                    "
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