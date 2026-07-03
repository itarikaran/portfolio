import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-slate-50/90">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Skills"
            title="Skills"
            description="A focused stack built around Java, Spring Boot, React.js, MySQL, REST APIs, and the tooling used in the updated resume."
          />
          <div className="max-w-xl rounded-[1.75rem] border border-slate-200 bg-white/82 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Stack Composition</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Organized to help recruiters quickly scan languages, backend frameworks, frontend tooling, database design, and core CS concepts.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="elevated-panel rounded-[2.25rem] p-6 lg:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">Capability Map</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">A practical stack tuned for full stack product delivery.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The portfolio is organized to make it easy to scan backend depth, frontend execution, database fluency, and the tooling used in real project work.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Backend', 'Frontend', 'Database', 'Tools', 'Core CS'].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Category</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {group.items.length}
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {group.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-3 text-sm font-medium text-slate-700">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-slate-950 via-blue-700 to-sky-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 0.9, delay: index * 0.08, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}