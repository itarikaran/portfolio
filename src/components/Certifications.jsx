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
          description="Certification cards grouped by provider for clean scanning and easy portfolio credibility."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {certifications.map((group) => (
            <article key={group.provider} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">{group.provider}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((certificate) => (
                  <span key={certificate} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {certificate}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}