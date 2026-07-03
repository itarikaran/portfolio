import { FiAward, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <AnimatedSection id="education">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="Academic foundation in computer science with strong scores and a clear focus on programming, databases, and web application development."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <article key={item.degree} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                    {index === 0 ? <FiBookOpen /> : <FiAward />}
                    {item.type}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Score</p>
                    <p className="mt-2 text-3xl font-black text-blue-700">{item.score}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{item.degree}</h3>
                  <p className="mt-2 text-base font-semibold text-slate-600">{item.institution}</p>
                  <p className="mt-2 text-sm font-medium text-blue-700">{item.period}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{item.focus}</p>
                </div>

                <div className="grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-blue-700" />
                      <p className="text-sm leading-6 text-slate-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
