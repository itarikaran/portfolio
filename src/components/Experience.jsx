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
          description="Timeline-based summary of internship experience focused on shipping responsive, data-driven full stack features."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-blue-300 to-transparent" />
            <div className="absolute left-0 top-1 rounded-full border-4 border-white bg-blue-600 p-1 shadow-lg shadow-blue-600/25">
              <FiBriefcase className="text-white" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Java Full Stack Development Intern</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">RORIRI Software Solutions</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">Internship engagement focused on responsive application delivery and backend integration.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experienceHighlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <div className="mt-1 rounded-full bg-blue-50 p-2 text-blue-700">
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