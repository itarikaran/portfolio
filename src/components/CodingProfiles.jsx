import { FiArrowUpRight, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profileLinks } from '../data/portfolio.js';

const iconMap = {
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
};

export default function CodingProfiles() {
  return (
    <AnimatedSection id="coding-profiles">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Coding and professional profiles"
          description="Quick links to coding practice, project repositories, and professional presence for recruiters and collaborators."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {profileLinks.map((profile) => {
            const Icon = iconMap[profile.label] ?? FiCode;

            return (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.1)]"
              >
                <div className={`rounded-2xl bg-gradient-to-br ${profile.accent} p-5`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-slate-950 shadow-sm">
                    <Icon className="text-xl" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{profile.label}</p>
                  <p className="mt-2 text-xl font-bold text-slate-950">{profile.focus}</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">{profile.note}</p>
                <p className="mt-3 break-all text-sm font-semibold text-slate-900">{profile.display}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Visit Profile
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
