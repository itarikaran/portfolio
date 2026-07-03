import { FiAward, FiCheckCircle } from 'react-icons/fi';
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
          description="Java, data structures, Spring Boot, Spring Data JPA, and REST learning grouped by provider for quick credibility checks."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {certifications.map((group) => (
            <article key={group.provider} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FiAward className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{group.provider}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">{group.focus}</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {group.items.map((certificate) => (
                  <div key={certificate} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-blue-700" />
                    <span className="text-sm font-medium leading-6 text-slate-700">{certificate}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
