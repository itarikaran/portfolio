import { FiArrowUp, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { navLinks, socialLinks } from '../data/portfolio.js';

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = navLinks.filter(({ id }) => !['home', 'contact'].includes(id));

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-sm font-bold shadow-lg shadow-blue-500/20">
              AK
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Ari Karan</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Java Full Stack Developer</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Building responsive React interfaces, Spring Boot REST APIs, and MySQL-backed application workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:arikaran4044@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                <FiMail className="text-base" />
                Contact Me
              </a>
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-200"
              >
                <FiDownload className="text-base" />
                Resume
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Explore</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {footerLinks.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/50 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Profiles</p>
              <div className="mt-4 grid gap-2">
                {socialLinks.map(({ label, href }) => {
                  const Icon = iconMap[label];

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/50 hover:text-white"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="text-base text-sky-300" />
                        {label}
                      </span>
                      <span aria-hidden="true">/</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Copyright {currentYear} Ari Karan. All rights reserved.</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
              <FiMapPin className="text-sky-300" />
              Tirunelveli, Tamil Nadu
            </p>
          </div>
          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:text-sky-200"
          >
            Back to Top
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
