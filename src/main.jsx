import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Download, Github, GraduationCap, MapPin, Menu, Send, X } from 'lucide-react';
import './styles.css';

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/itarikaran' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/itarikaran' },
  { label: 'LeetCode', href: 'https://leetcode.com/itarikaran' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/itarikaran' },
];
// Add the project repository URL here when it is available.
const JOBTRACKER_REPO_URL = '';

const skills = [
  ['Programming', 'Java'],
  ['Core concepts', 'OOP'],
  ['Backend', 'Spring Boot'],
  ['Frontend', 'HTML · JavaScript'],
  ['Database', 'MySQL'],
  ['DSA', 'Arrays'],
  ['Tools', 'Git · GitHub'],
];

const certifications = [
  'NPTEL · Programming in Java',
  'NPTEL · Data Structures and Algorithms using Java',
  'Infosys Springboard · Learn Coding with Java',
  'Infosys Springboard · Spring 5 Basics with Spring Boot',
  'Infosys Springboard · Spring Data JPA with Boot',
  'Infosys Springboard · Spring REST',
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];
  return <header className="site-header">
    <div className="container nav-wrap">
      <a className="brand" href="#home" aria-label="Ari Karan home"><img src="/logo.png" alt="Ari Karan logo" /></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="nav-resume" href="/resume.pdf" download>Resume <Download size={15} /></a>
      </nav>
    </div>
  </header>;
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function App() {
  return <>
    <Header />
    <main>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hello"><span className="hello-line" /> Hi, I’m Ari Karan</p>
            <h1>Java Developer<span className="period">.</span></h1>
            <p className="hero-intro">Entry-level Java Developer with foundational knowledge of Core Java, OOP, Spring Boot, and MySQL. Interested in building backend applications and continuously improving my programming skills.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowRight size={17} /></a><a className="button button-outline" href="/resume.pdf" download><Download size={16} /> Download resume</a></div>
            <div className="social-row" aria-label="Coding and social profiles">{profileLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<ArrowUpRight size={13} /></a>)}</div>
          </div>
          <div className="hero-visual"><div className="portrait-glow" /><div className="portrait-frame"><img src="/arikaran.png" alt="Portrait of Ari Karan" /></div><div className="floating-note"><span className="note-icon"><Code2 size={18} /></span><span><strong>Building my foundation</strong><small>One project at a time</small></span></div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /></div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <section className="section about-section" id="about"><div className="container about-grid">
        <SectionHeading eyebrow="A little about me" title={<>Curious by nature.<br /><span>Developer by choice.</span></>} />
        <div className="about-copy"><p>I’m a B.E. Computer Science and Engineering student with a growing interest in Java backend development. I enjoy understanding how applications work behind the scenes and turning what I learn into practical projects.</p><p>Right now, I’m learning Spring Boot and database integration while strengthening my programming and problem-solving skills.</p><div className="location-chip"><MapPin size={16} /> Tirunelveli, Tamil Nadu, India</div></div>
      </div></section>

      <section className="section skills-section" id="skills"><div className="container"><SectionHeading eyebrow="What I work with" title="Technical skills" description="The tools and concepts I’m building confidence with." /><div className="skills-grid">{skills.map(([group, items], i) => <article className="skill-item" key={group}><span className="skill-index">0{i + 1}</span><div><p>{group}</p><h3>{items}</h3></div><span className="skill-dot" /></article>)}</div></div></section>

      <section className="section projects-section" id="projects"><div className="container"><SectionHeading eyebrow="Selected work" title="Projects" description="A hands-on project where I’m putting my backend learning into practice." /><article className="project-card"><div className="project-top"><div><span className="project-label"><Code2 size={14} /> FEATURED PROJECT</span><h3>JobTracker <span>— Job Application Tracker</span></h3></div><span className="project-number">01</span></div><p className="project-description">A simple job application tracking system built using Spring Boot, JavaScript, and MySQL. It keeps application details organized through a straightforward set of record management features.</p><div className="feature-list"><span>Add job applications</span><span>View applications</span><span>Update application details</span><span>Manage records</span></div><div className="project-footer"><div className="tag-list"><span>Spring Boot</span><span>JavaScript</span><span>MySQL</span></div>{JOBTRACKER_REPO_URL ? <a className="text-link" href={JOBTRACKER_REPO_URL} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={16} /></a> : <span className="text-link unavailable-link">Repository URL to be added</span>}</div></article></div></section>

      <section className="section experience-section" id="experience"><div className="container"><SectionHeading eyebrow="Learning by doing" title="Experience" /><article className="timeline-card"><div className="timeline-marker"><BriefcaseBusiness size={19} /></div><div className="timeline-content"><div className="timeline-top"><div><h3>Full Stack Web Development Bootcamp</h3><p className="organization">EasyShiksha <span>· Academic Online Internship</span></p></div><span className="date-pill">18 Jun — 15 Jul 2026</span></div><p>Completed an academic online internship focused on full-stack web development. Worked with Java, JSP, Servlets, HTML, CSS, JavaScript, and MySQL, using Apache Tomcat to deploy and test Java web applications.</p><div className="tag-list"><span>Java</span><span>JSP & Servlets</span><span>HTML & CSS</span><span>JavaScript</span><span>MySQL</span><span>Apache Tomcat</span></div></div></article></div></section>

      <section className="section education-section" id="education"><div className="container"><SectionHeading eyebrow="The journey so far" title="Education & certifications" /><div className="education-grid"><div className="education-list"><article className="education-card"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">Expected 2027</span><h3>B.E. Computer Science and Engineering</h3><p>V V College of Engineering</p><span className="grade">CGPA <strong>8.28 / 10</strong></span></div></article><article className="education-card"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-date">2021</span><h3>Diploma in Computer Engineering</h3><p>RECT Polytechnic College</p><span className="grade">CGPA <strong>9.40 / 10</strong></span></div></article></div><div className="certifications"><h3>Certifications</h3><ul>{certifications.map((cert) => <li key={cert}><span className="cert-check">✓</span>{cert}</li>)}</ul></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-inner"><div className="contact-copy"><span className="eyebrow">Let’s connect</span><h2>Have an opportunity<br />or a project in mind?</h2><p>I’m open to entry-level opportunities and conversations about Java development.</p><a className="button button-light" href="mailto:arikaran4044@gmail.com">Get in touch <Send size={16} /></a></div><div className="contact-details"><a href="mailto:arikaran4044@gmail.com"><span>Email</span><strong>arikaran4044@gmail.com</strong><ArrowUpRight size={16} /></a><a href="tel:+919940444012"><span>Phone</span><strong>+91 99404 44012</strong><ArrowUpRight size={16} /></a><div className="contact-location"><span>Location</span><strong>Tirunelveli, Tamil Nadu, India</strong></div><div className="contact-social">{profileLinks.slice(0, 2).map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} <ArrowUpRight size={13} /></a>)}</div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="footer-brand" href="#home"><img src="/logo.png" alt="" /><span><strong>Ari Karan</strong><small>Java Developer</small></span></a><p>© {new Date().getFullYear()} Ari Karan. Built with care.</p><div className="footer-social">{profileLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>{item.label}</a>)}</div></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
