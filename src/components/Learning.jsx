function Learning() {
  const topics = [
    "Spring Security",
    "JWT Authentication",
    "Microservices",
    "Docker",
    "Data Structures & Algorithms",
  ];

  return (
    <section id="learning" className="py-24" role="region" aria-labelledby="learning-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="learning-heading" className="text-4xl font-bold text-red-500 mb-10">
          Currently Learning
        </h2>

        <div className="flex flex-wrap gap-4" role="list">
          {topics.map((topic) => (
            <div
              key={topic}
              className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              tabIndex="0"
              role="listitem"
              aria-label={`Currently learning: ${topic}`}
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