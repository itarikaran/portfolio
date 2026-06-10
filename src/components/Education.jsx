import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

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
    <section id="education" className="py-24 lg:py-28" role="region" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Education"
          title="The academic foundation behind the work."
          description="A quick look at my formal computer science background and the milestones that shaped my learning path."
          id="education-heading"
        />

        <div className="space-y-6" role="list">
          {education.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl shadow-xl shadow-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
              role="listitem"
              tabIndex="0"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.degree}
              </h3>

              <p className="text-zinc-300 mt-1">
                {item.college}
              </p>

              <div className="flex justify-between mt-5 text-sm text-zinc-400" role="group" aria-label="Education details">
                <span className="rounded-full border border-white/8 px-3 py-1" aria-label={`Graduation year: ${item.year}`}>{item.year}</span>
                <span className="rounded-full border border-white/8 px-3 py-1" aria-label={`Score: ${item.score}`}>{item.score}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;