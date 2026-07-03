import { motion, useReducedMotion } from 'framer-motion';
import { smoothEase } from '../utils/motion.js';

export default function LoadingScreen() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: smoothEase }}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: smoothEase }}
      >
        <div className="flex items-center gap-3">
          <motion.span
            className="h-3 w-3 rounded-full bg-blue-600"
            animate={reduceMotion ? undefined : { scale: [1, 1.35, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          />
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-900">ARI KARAN</span>
        </div>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-blue-400' : 'bg-blue-600'}`}
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, delay: index * 0.12, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <p className="text-sm text-slate-500">Loading portfolio...</p>
      </motion.div>
    </motion.div>
  );
}
