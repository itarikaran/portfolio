import { FiArrowUpRight, FiCheckCircle, FiExternalLink, FiGithub, FiTarget } from 'react-icons/fi';
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
          description="Selected full stack applications showing CRUD design, API integration, frontend-backend flow, and MySQL-backed persistence."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
              <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="bg-[linear-gradient(160deg,rgba(37,99,235,0.08),rgba(248,250,252,1))] p-7 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Project</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{project.name}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{project.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
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
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
                      >
                        <FiGithub />
                        GitHub
                        <FiArrowUpRight className="text-base" />
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="p-7 lg:p-10">
                  <div className="grid gap-7 xl:grid-cols-2">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">Features</p>
                      <div className="mt-5 grid gap-3">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-blue-700" />
                            <span className="text-sm leading-7 text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-slate-950">What it improves</p>
                      <div className="mt-5 grid gap-3">
                        {project.impact.map((item) => (
                          <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50">
                            <FiTarget className="mt-0.5 shrink-0 text-xl text-slate-900" />
                            <span className="text-sm leading-7 text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="text-sm leading-7 text-slate-600">
                      Built to demonstrate a maintainable full stack pattern: database schema, backend services, REST endpoints,
                      and React views working together as one user flow.
                    </p>
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
