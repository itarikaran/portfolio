import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <motion.div
        className="elevated-panel flex flex-col items-center gap-5 rounded-[2rem] px-8 py-10"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-900">ARI KARAN</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-100" />
          <span className="h-3 w-3 rounded-full bg-blue-400" />
          <motion.span
            className="h-3 w-3 rounded-full bg-blue-600"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-sm text-slate-500">Loading portfolio...</p>
      </motion.div>
    </div>
  );
}