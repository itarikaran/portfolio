import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiServer, FiTerminal, FiTool } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

const iconMap = {
  Languages: FiCode,
  Backend: FiServer,
  Frontend: FiLayers,
  Database: FiDatabase,
  Tools: FiTool,
  'Core Concepts': FiTerminal,
};

const featuredSkills = ['Java', 'Spring Boot', 'React.js', 'RESTful APIs', 'MySQL', 'Git'];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-slate-50/90">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Skills"
            title="Technical Skills"
            description="A focused full stack toolkit for building Java/Spring applications with responsive React interfaces and relational data workflows."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Primary stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.1)]"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    {(() => {
                      const Icon = iconMap[group.title] ?? FiCode;
                      return <Icon className="text-xl" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{group.summary}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {group.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700">
                      <span>{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
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
