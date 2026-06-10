import SectionHeading from "./SectionHeading";

function Learning() {
  const topics = [
    "Spring Security",
    "JWT Authentication",
    "Microservices",
    "Docker",
    "Data Structures & Algorithms",
  ];

  return (
    <section id="learning" className="py-24 lg:py-28" role="region" aria-labelledby="learning-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Growth"
          title="What I’m sharpening right now."
          description="The topics I’m actively studying to deepen my backend, security, and system design skills."
          id="learning-heading"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {topics.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-zinc-200 shadow-xl shadow-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
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