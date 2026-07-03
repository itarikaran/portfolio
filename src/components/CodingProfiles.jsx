import { FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profileLinks } from '../data/portfolio.js';

export default function CodingProfiles() {
  return (
    <AnimatedSection id="coding-profiles">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Coding Profiles"
          description="Public coding profiles laid out as polished link cards for recruiters and collaborators."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {profileLinks.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
            >
              <div className={`rounded-2xl bg-gradient-to-br ${profile.accent} p-4`}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{profile.label}</p>
                  <span className="rounded-full border border-white/60 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500 backdrop-blur">
                    Public
                  </span>
                </div>
                <p className="mt-3 break-all text-base font-semibold text-slate-950">{profile.display}</p>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                Open profile
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}