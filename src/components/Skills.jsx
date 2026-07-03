import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-slate-50/90">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4">
          <SectionHeading
            eyebrow="Skills"
            title="Skills"
            description="A focused stack built around Java, Spring Boot, React.js, MySQL, REST APIs, and the tooling used in the updated resume."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.1)]"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {group.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-3 text-sm font-medium text-slate-700">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
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
    </AnimatedSection>
  );
}