const categories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST API"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind"],
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
    <section id="skills" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-bold text-xl mb-4">
                {item.title}
              </h3>

              <div className="space-y-2">
                {item.skills.map((skill) => (
                  <p key={skill} className="text-zinc-400">
                    • {skill}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;