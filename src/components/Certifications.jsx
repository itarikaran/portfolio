import SectionHeading from "./SectionHeading";

function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-28" role="region" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Certification"
          title="Continuous learning, verified."
          description="Formal training that supports my foundation in Java and software development practices."
          id="certifications-heading"
        />

        <article className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-7 backdrop-blur-xl shadow-xl shadow-black/10 focus:outline-none focus:ring-2 focus:ring-red-500" tabIndex="0" role="article">
          <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold">NPTEL</p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            NPTEL - Programming in Java
          </h3>

          <p className="text-zinc-300 mt-3 leading-relaxed">
            Completed comprehensive training in Java,
            OOP concepts and software development fundamentals.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Certifications;