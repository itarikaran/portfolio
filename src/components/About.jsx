import { FiAward, FiBox, FiDatabase, FiCode } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

const highlights = [
  { label: 'Experience', value: 'RORIRI + EasyShiksha', icon: FiAward },
  { label: 'Projects', value: 'Student and Task systems', icon: FiBox },
  { label: 'Technologies', value: 'Java, Spring Boot, React', icon: FiCode },
  { label: 'Database', value: 'MySQL + SQL design', icon: FiDatabase },
];

export default function About() {
  return (
    <AnimatedSection id="about" alternate className="border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="About Me"
            title="About Me"
            description="Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, MySQL, REST APIs, and Git. Experienced in building responsive full stack applications, implementing CRUD functionality, integrating frontend and backend services, and designing relational databases."
          />

          <div className="elevated-panel rounded-[2.25rem] p-5 sm:p-6 lg:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200/75 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Professional Snapshot</p>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">A concise overview of the current stack, delivery style, and project focus.</p>
              </div>
              <div className="hidden rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-right sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-700">Current Focus</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Recruiter-ready full stack work</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-700 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="text-xl" />
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['REST APIs', 'CRUD', 'Frontend Integration', 'Database Design', 'Responsive UI'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}