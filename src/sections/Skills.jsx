import { motion } from "framer-motion";
import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript } from "react-icons/si";

function Skills() {
  const skills = {
    Backend: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    Frontend: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent blur-2xl"></div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Container */}
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-5 text-red-400">
              {category}
            </h3>

            {/* Skill Cards */}
            <div className="flex flex-wrap gap-5">
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl 
                             bg-white/5 backdrop-blur-lg 
                             border border-white/10 
                             shadow-lg shadow-red-500/10 
                             hover:shadow-red-500/30 
                             transition"
                >
                  <span className="text-red-400 text-lg">
                    {skill.icon}
                  </span>
                  <span className="text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;