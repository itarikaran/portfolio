import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <AnimatedSection id="certificates" alternate className="border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications"
          description="Certification cards grouped by provider for clean scanning and easy credibility checks."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="elevated-panel rounded-[2.25rem] p-6 lg:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Learning Evidence</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">Certifications and structured study, presented clearly.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              These certifications support the practical skills and backend/frontend foundations reflected throughout the portfolio.
            </p>
          </div>

          <div className="grid gap-5">
          {certifications.map((group) => (
            <article key={group.provider} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_65px_rgba(15,23,42,0.09)]">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Certification Provider</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950">{group.provider}</h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Verified
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((certificate) => (
                  <span key={certificate} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white">
                    {certificate}
                  </span>
                ))}
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}