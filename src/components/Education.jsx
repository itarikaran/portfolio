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

        <div className="mt-12 space-y-5">
          {education.map((item, index) => (
            <article key={item.degree} className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-sky-400" />
              <div className="flex flex-col gap-4 pl-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                    <FiAward />
                    {index === 0 ? 'Degree' : 'Diploma'}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">{item.degree}</h3>
                  <p className="mt-2 text-base text-slate-600">{item.institution}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Score</p>
                  <p className="mt-2 text-3xl font-black text-blue-700">{item.score}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}