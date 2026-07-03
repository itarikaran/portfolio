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
      className={`scroll-mt-24 ${alternate ? 'bg-slate-50/95' : 'bg-white'} ${className}`}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}