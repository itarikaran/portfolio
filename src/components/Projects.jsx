import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <AnimatedSection id="projects" alternate className="border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Highlighted projects from the resume with the most relevant stack, features, and implementation focus."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <article key={project.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
              <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
                <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] p-8 text-white lg:p-10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">Featured Project</p>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                      Case Study {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                    Full stack application designed to demonstrate clean API integration, database-driven workflows, and a polished user interface.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/90">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
                      >
                        <FiGithub />
                        GitHub
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="bg-white p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-slate-950">Features</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">What it shows</span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white">
                        <FiCheckCircle className="mt-0.5 text-xl text-slate-950" />
                        <span className="text-sm leading-7 text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}