import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Education = lazy(() => import('./components/Education.jsx'));
const Certifications = lazy(() => import('./components/Certifications.jsx'));
const CodingProfiles = lazy(() => import('./components/CodingProfiles.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.title = 'ARI KARAN | Java Full Stack Developer';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'ARI KARAN is a Java Full Stack Developer building modern React, Spring Boot, MySQL, and REST API applications.',
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        visibleSections.sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]?.target.id) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const loadingTimer = window.setTimeout(() => setIsLoading(false), 900);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-blue-600 to-sky-400"
        style={{ scaleX: scrollYProgress }}
      />
      <ParticleBackground />
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <CodingProfiles />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <ScrollToTop />
      {isLoading ? <LoadingScreen /> : null}
    </>
  );
}

function SectionFallback() {
  return <div className="min-h-[20vh] bg-white" />;
}

export default App;