import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experienceHighlights } from '../data/portfolio.js';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="Timeline-based summary of internship and bootcamp experience focused on responsive full stack delivery and backend integration."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="elevated-panel rounded-[2.25rem] p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Career Timeline</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950">Professional journey</h3>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">2 roles</span>
            </div>

            <div className="relative mt-6 space-y-5 pl-8">
              <div className="absolute left-3 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-slate-950 via-blue-500 to-transparent" />

              <div className="relative">
                <div className="absolute -left-8 top-2 rounded-full border-4 border-white bg-slate-950 p-2 shadow-lg shadow-slate-950/20">
                  <FiBriefcase className="text-white" />
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Java Full Stack Development Intern</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">RORIRI Software Solutions</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Developed responsive web applications using Spring Boot, React.js, Tailwind CSS, and MySQL.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-2 rounded-full border-4 border-white bg-slate-600 p-2 shadow-lg shadow-slate-600/20">
                  <FiBriefcase className="text-white" />
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Full Stack Web Development Bootcamp</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">EasyShiksha</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Built full stack web applications using Java, JSP, Servlets, HTML, CSS, JavaScript, and MySQL.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="mt-1 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 p-2 text-slate-950 transition-transform duration-300 group-hover:scale-105">
                  <FiCheckCircle className="text-lg" />
                </div>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}