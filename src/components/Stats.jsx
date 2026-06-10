import { motion } from "framer-motion";

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
    <section className="py-12" role="region" aria-label="Technology statistics">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
          {stats.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 text-center focus:outline-none focus:ring-2 focus:ring-red-500"
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