import { FiBriefcase, FiCheckCircle, FiLayers, FiTool } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience, experienceHighlights } from '../data/portfolio.js';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on full stack experience"
          description="Internship and training work focused on Java web development, REST API integration, responsive frontend delivery, and database-backed workflows."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative space-y-5 pl-7">
            <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-600 via-blue-300 to-transparent" />
            {experience.map((item) => (
              <article key={item.company} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <div className="absolute -left-[1.95rem] top-6 rounded-full border-4 border-white bg-blue-600 p-1.5 shadow-lg shadow-blue-600/25">
                  <FiBriefcase className="text-white" />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{item.type}</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950">{item.role}</h3>
                    <p className="mt-1 text-base font-semibold text-slate-600">{item.company}</p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                    <FiTool className="text-blue-700" />
                    Full stack
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <FiCheckCircle className="mt-1 shrink-0 text-blue-700" />
                      <p className="text-sm leading-6 text-slate-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <FiLayers className="text-xl" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950">Practical strengths</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Experience spans frontend screens, backend APIs, database workflows, and deployment basics, which makes the work easier to connect end to end.
            </p>
            <div className="mt-6 grid gap-3">
            {experienceHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50"
              >
                <div className="rounded-full bg-blue-50 p-2 text-blue-700">
                  <FiCheckCircle className="text-lg" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
