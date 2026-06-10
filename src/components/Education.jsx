import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "BE - Computer Science Engineering",
      college: "VV College of Engineering",
      year: "2027",
      score: "80%",
    },
    {
      degree: "Diploma - Computer Science Engineering",
      college: "RECT Polytechnic College",
      year: "2021",
      score: "94%",
    },
    {
      degree: "HSC",
      college: "AVJ Govt Higher Secondary School",
      year: "2019",
      score: "62%",
    },
  ];

  return (
    <section id="education" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-12">
          Education
        </h2>

        <div className="space-y-6">

          {education.map((item) => (
            <motion.div
              key={item.degree}
              whileHover={{ y: -4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-zinc-400 mt-1">
                {item.college}
              </p>

              <div className="flex justify-between mt-4 text-sm text-zinc-500">
                <span>{item.year}</span>
                <span>{item.score}</span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;