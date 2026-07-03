import { motion, useReducedMotion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

export default function AnimatedSection({ id, className = '', children, alternate = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 relative overflow-hidden ${alternate ? 'bg-slate-50/80' : 'bg-white/90'} ${className}`}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.45]">
        <div className="absolute left-[-6rem] top-12 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-[-5rem] bottom-20 h-44 w-44 rounded-full bg-sky-100/50 blur-3xl" />
      </div>
      {children}
    </motion.section>
  );
}