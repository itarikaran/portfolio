import { FiAward } from 'react-icons/fi';
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
          description="Academic background from the updated resume presented in a timeline-style card layout for quick scanning."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => (
            <article key={item.degree} className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_65px_rgba(15,23,42,0.09)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-slate-950 via-blue-700 to-sky-500" />
              <div className="flex h-full flex-col justify-between gap-6 pl-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                      <FiAward />
                      {index === 0 ? 'Degree' : 'Diploma'}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.degree}</h3>
                    <p className="mt-2 text-base text-slate-600">{item.institution}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Score</p>
                    <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{item.score}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200/70 pt-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  <span>Academic track</span>
                  <span>Foundation</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}