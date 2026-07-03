import { motion, useReducedMotion } from 'framer-motion';
import { smoothEase } from '../utils/motion.js';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
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
