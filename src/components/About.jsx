import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="py-24 lg:py-28" role="region" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Who I Am"
          title="I build dependable backend-first products with a clean front end."
          description="Motivated Java Full-Stack Developer with hands-on experience in Java, Spring Boot, React.js, and MySQL. I enjoy turning product ideas into fast, maintainable interfaces and reliable systems."
          id="about-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-black/20">
            <p className="text-zinc-300 text-lg leading-8">
              My focus is on building interfaces that feel sharp and intentional while keeping the underlying architecture simple, scalable, and easy to evolve.
              I pay attention to detail, from component structure to visual rhythm and animation timing.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ["Backend", "Java & Spring Boot"],
                ["APIs", "REST and CRUD workflows"],
                ["Quality", "Readable, reusable UI"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{label}</p>
                  <p className="mt-2 text-white font-semibold leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 lg:p-10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold">Snapshot</p>

            <div className="mt-6 space-y-4">
              {[
                ["Role", "Java Full-Stack Developer"],
                ["Stack", "React, Spring Boot, MySQL"],
                ["Style", "Dark, fast, and polished"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-zinc-500 uppercase text-xs tracking-[0.3em]">{label}</span>
                  <span className="text-white font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;