import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';

// Lazy load components for better initial load performance
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Learning = lazy(() => import('./components/Learning'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Profiles = lazy(() => import('./components/Profiles'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading placeholder
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <main role="main">
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Stats />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Learning />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Education />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Profiles />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;