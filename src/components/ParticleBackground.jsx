import { motion } from 'framer-motion';

const orbs = [
  'left-[-8rem] top-20 h-72 w-72 bg-blue-100/22',
  'right-[-6rem] top-[20rem] h-80 w-80 bg-slate-200/20',
  'left-[14%] bottom-[16%] h-56 w-56 bg-sky-100/18',
];

export default function ParticleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.045),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.02),_transparent_28%)]" />
      {orbs.map((className, index) => (
        <motion.span
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 11 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}