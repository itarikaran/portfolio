function Learning() {
  const topics = [
    "Spring Security",
    "JWT Authentication",
    "Microservices",
    "Docker",
    "Data Structures & Algorithms",
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-10">
          Currently Learning
        </h2>

        <div className="flex flex-wrap gap-4">

          {topics.map((topic) => (
            <div
              key={topic}
              className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl"
            >
              {topic}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Learning;