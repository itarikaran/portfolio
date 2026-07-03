import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/portfolio.js';

export default function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b border-transparent transition-all duration-300 ${
        scrolled ? 'border-slate-200/70 bg-white/78 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl' : 'bg-white/50 backdrop-blur-2xl'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateToSection('home')}
          className="group inline-flex items-center gap-3 text-left"
          aria-label="Go to home section"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(37,99,235,1),rgba(14,165,233,0.95))] text-sm font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition-transform duration-300 group-hover:scale-105">
            AR
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-slate-900">ARI KARAN</span>
            <span className="block text-xs font-medium text-slate-500">Java Full Stack Developer</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/72 px-2 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => navigateToSection(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
          >
            <FiDownload className="text-base" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => navigateToSection('contact')}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(37,99,235,0.3)]"
          >
            Hire Me
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-sm backdrop-blur md:hidden"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="border-t border-slate-200/70 bg-white/96 px-4 pb-5 pt-3 shadow-2xl shadow-slate-200/40 backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navigateToSection(link.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                >
                  <FiDownload className="text-base" />
                  Resume
                </a>
                <button
                  type="button"
                  onClick={() => navigateToSection('contact')}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}