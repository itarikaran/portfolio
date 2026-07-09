import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { navLinks } from '../data/portfolio.js';
import { smoothEase } from '../utils/motion.js';

export default function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleNavLinks = navLinks.filter(({ id }) => id !== 'contact');
  const activeLabel = navLinks.find(({ id }) => id === activeSection)?.label ?? 'Home';

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
        scrolled ? 'border-slate-200/70 bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl' : 'bg-white/70 backdrop-blur-xl'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateToSection('home')}
          className="group inline-flex items-center gap-3 text-left"
          aria-label="Go to home section"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            AK
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">ARI KARAN</span>
            <span className="block text-xs text-slate-500">Java Full Stack Developer</span>
          </span>
        </button>

        <nav className="hidden max-w-[52vw] items-center gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/85 px-2 py-2 shadow-sm shadow-slate-200/40 [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden">
          {visibleNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => navigateToSection(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative shrink-0 overflow-hidden rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="desktop-nav-active"
                    className="absolute inset-0 rounded-full bg-slate-950 shadow-md shadow-slate-950/20"
                    transition={{ duration: 0.32, ease: smoothEase }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
          >
            <FiDownload className="text-base" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => navigateToSection('contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-600/35"
          >
            Hire Me
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="border-t border-slate-200/70 bg-white/95 px-4 pb-5 pt-3 shadow-2xl shadow-slate-200/40 backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: smoothEase }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <div className="mb-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Currently viewing</p>
                <p className="mt-2 text-lg font-bold text-slate-950">{activeLabel}</p>
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navigateToSection(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      isActive ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{link.label}</span>
                    {isActive ? <span className="h-2 w-2 rounded-full bg-sky-300" /> : null}
                  </button>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
                  onClick={() => setMenuOpen(false)}
                >
                  <FiDownload className="text-base" />
                  Resume
                </a>
                <button
                  type="button"
                  onClick={() => navigateToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white"
                >
                  Hire Me
                  <FiArrowRight className="text-base" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
