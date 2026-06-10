import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function Stats() {
  const stats = [
    {
      id: 1,
      number: "Java",
      title: "Core Language",
    },
    {
      id: 2,
      number: "Spring Boot",
      title: "Backend Framework",
    },
    {
      id: 3,
      number: "MySQL",
      title: "Database Management",
    },
    {
      id: 4,
      number: "React",
      title: "Frontend Development",
    },
  ];

  return (
    <section className="py-24 lg:py-28" role="region" aria-label="Technology statistics">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Core Stack"
          title="The technologies that define my day-to-day work."
          description="A concise look at the tools and platforms I lean on when building full-stack applications."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
          {stats.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 text-center backdrop-blur-xl shadow-2xl shadow-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
              role="listitem"
              tabIndex="0"
            >
              <h2 className="text-3xl font-bold text-red-500">
                {item.number}
              </h2>

              <p className="text-zinc-400 mt-2">
                {item.title}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;