import { FiAward, FiBox, FiCode, FiDatabase, FiGitBranch, FiLayers, FiServer, FiZap } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';

const highlights = [
  { label: 'Experience', value: 'RORIRI + EasyShiksha', icon: FiAward },
  { label: 'Project Focus', value: 'Student and task systems', icon: FiBox },
  { label: 'Backend', value: 'Java, Spring Boot, REST APIs', icon: FiServer },
  { label: 'Frontend', value: 'React.js, Tailwind CSS', icon: FiCode },
];

const focusAreas = [
  { label: 'Full stack delivery', text: 'Builds responsive React interfaces backed by Spring Boot APIs.', icon: FiLayers },
  { label: 'Database workflows', text: 'Designs MySQL-backed CRUD flows with practical relational structure.', icon: FiDatabase },
  { label: 'Developer habits', text: 'Uses Git, GitHub, Postman, and IDE tooling through the build cycle.', icon: FiGitBranch },
  { label: 'Learning speed', text: 'Keeps improving through internships, bootcamps, and Java certifications.', icon: FiZap },
];

export default function About() {
  return (
    <AnimatedSection id="about" alternate className="border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Java full stack developer focused on practical web applications."
              description="I work across Java, Spring Boot, React.js, MySQL, REST APIs, and Git, with hands-on practice building responsive applications that connect clean frontend experiences to reliable backend services."
            />

            <div className="mt-8 space-y-4 text-base leading-8 text-slate-600">
              <p>
                My strongest work sits around CRUD-heavy business apps: modeling the database, exposing the right endpoints,
                wiring the React views, and keeping the user flow simple.
              </p>
              <p>
                I am currently looking for full stack developer opportunities where I can contribute to Java/Spring projects,
                keep learning from production code, and ship dependable features.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.09)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="text-xl" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ label, text, icon: Icon }) => (
            <div key={label} className="flex gap-4 border-t border-slate-200 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Icon className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
