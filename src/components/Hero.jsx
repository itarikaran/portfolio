import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const typingWords = ['Java Developer', 'Spring Boot Developer', 'React Developer', 'MySQL Developer', 'Java Full Stack Developer'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const activeWord = typingWords[wordIndex];
    const baseDelay = isDeleting ? 55 : 95;
    const timeout = window.setTimeout(() => {
      const nextLength = isDeleting ? characterIndex - 1 : characterIndex + 1;
      setDisplayText(activeWord.slice(0, nextLength));
      setCharacterIndex(nextLength);

      if (!isDeleting && nextLength === activeWord.length) {
        window.setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && nextLength === 0) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % typingWords.length);
      }
    }, baseDelay);

    return () => window.clearTimeout(timeout);
  }, [characterIndex, isDeleting, wordIndex]);

  const socialButtons = [
    { label: 'GitHub', href: 'https://github.com/itarikaran', icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/itarikaran', icon: FiLinkedin },
    { label: 'LeetCode', href: 'https://leetcode.com/u/itarikaran/', icon: SiLeetcode },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/itarikaran', icon: SiHackerrank },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-8">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/50">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            Available for full stack opportunities
          </div>

          <p className="mt-8 text-base font-medium uppercase tracking-[0.35em] text-slate-500">Hello, I&apos;m</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">ARI KARAN</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-2xl font-semibold text-blue-700 sm:text-3xl">
            <span>{displayText}</span>
            <span className="inline-block h-8 w-[2px] animate-pulse bg-blue-700" aria-hidden="true" />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, MySQL, REST APIs, and Git. I build responsive full stack applications with clean frontend-backend integration.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/assets/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,99,235,0.32)]"
            >
              Download Resume
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
            >
              View Projects
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialButtons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
              >
                <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="absolute inset-0 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle,_rgba(37,99,235,0.16),_transparent_55%)]" />
          <motion.div
            className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-blue-100/80 blur-xl"
            animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-slate-200/70 blur-2xl"
            animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(241,245,249,0.65))]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,1))] p-4 shadow-inner shadow-slate-200/50">
              <motion.img
                src="/assets/arikaran.png"
                alt="Ari Karan portrait"
                className="aspect-square w-full rounded-[1.25rem] object-contain object-center shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
                animate={{ y: [0, -6, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="relative mt-4 grid gap-3 rounded-[1.5rem] border border-slate-200/70 bg-white/95 p-4 shadow-sm sm:grid-cols-3">
              <Stat label="Full Stack" value="Java + React" />
              <Stat label="REST APIs" value="Spring Boot" />
              <Stat label="Database" value="MySQL" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}