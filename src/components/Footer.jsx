import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { socialLinks } from '../data/portfolio.js';

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">ARI KARAN</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Java Full Stack Developer</h2>
            <p className="mt-3 text-sm text-slate-500">© 2026 Ari Karan. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href }) => {
              const Icon = iconMap[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
                >
                  <Icon className="text-base" />
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
          <p className="text-sm text-slate-500">Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
          >
            Back to Top
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}