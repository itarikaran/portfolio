import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { smoothEase } from '../utils/motion.js';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.25)] transition-colors duration-300 hover:bg-slate-800"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, y: 12 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          transition={{ duration: 0.28, ease: smoothEase }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-lg" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
