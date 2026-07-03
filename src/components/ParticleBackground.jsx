import { motion, useReducedMotion } from 'framer-motion';

const orbs = [
  'left-[-8rem] top-20 h-72 w-72 bg-blue-100/70',
  'right-[-5rem] top-[22rem] h-80 w-80 bg-sky-100/70',
  'left-[12%] bottom-[18%] h-56 w-56 bg-slate-200/70',
];

export default function ParticleBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.04),_transparent_28%)]" />
      {orbs.map((className, index) => (
        <motion.span
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={reduceMotion ? undefined : { y: [0, -14, 0], x: [0, 8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
