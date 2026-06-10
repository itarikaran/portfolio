import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "Java",
      title: "Core Language",
    },
    {
      number: "Spring Boot",
      title: "Backend Framework",
    },
    {
      number: "MySQL",
      title: "Database Management",
    },
    {
      number: "React",
      title: "Frontend Development",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 text-center"
            >
              <h2 className="text-3xl font-bold text-red-500">
                {item.number}
              </h2>

              <p className="text-zinc-400 mt-2">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;