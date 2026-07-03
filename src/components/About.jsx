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
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="About Me"
            title="About Me"
            description="Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, MySQL, REST APIs, and Git. Experienced in building responsive full stack applications, implementing CRUD functionality, integrating frontend and backend services, and designing relational databases."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="text-xl" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}