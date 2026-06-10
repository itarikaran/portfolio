import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      id: 1,
      degree: "BE - Computer Science Engineering",
      college: "VV College of Engineering",
      year: "2027",
      score: "80%",
    },
    {
      id: 2,
      degree: "Diploma - Computer Science Engineering",
      college: "RECT Polytechnic College",
      year: "2021",
      score: "94%",
    },
    {
      id: 3,
      degree: "HSC",
      college: "AVJ Govt Higher Secondary School",
      year: "2019",
      score: "62%",
    },
  ];

  return (
    <section id="education" className="py-24" role="region" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="education-heading" className="text-4xl font-bold text-red-500 mb-12">
          Education
        </h2>

        <div className="space-y-6" role="list">
          {education.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-red-500"
              role="listitem"
              tabIndex="0"
            >
              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-zinc-400 mt-1">
                {item.college}
              </p>

              <div className="flex justify-between mt-4 text-sm text-zinc-500" role="group" aria-label="Education details">
                <span aria-label={`Graduation year: ${item.year}`}>{item.year}</span>
                <span aria-label={`Score: ${item.score}`}>{item.score}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;