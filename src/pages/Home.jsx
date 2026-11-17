import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Section,
  Container,
  Button,
  Card,
  ScrollReveal,
} from '../components/ui';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium uppercase tracking-wider">
                  Tamil Nadu, India
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-2 lg:space-y-3"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-black">
                  Ari Karan
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold tracking-wide text-violet-600">
                  Full Stack Developer
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-4xl text-gray-600 text-lg lg:text-xl leading-relaxed"
              >
                Aspiring Full Stack Developer pursuing a B.E. in Computer
                Science and Engineering, with hands-on experience building
                full-stack web applications using JavaScript, TypeScript,
                React.js, Next.js, Node.js, Express.js, NestJS, MongoDB and
                PostgreSQL. Skilled in developing RESTful APIs, implementing
                authentication and authorization, integrating databases, and
                building AI-powered application features. Interested in
                developing scalable, secure and responsive web applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild>
                  <Link to="/projects">View Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/resume">Download Resume</Link>
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:block ml-15">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src="/arikaran.png"
                alt="Profile"
                className="w-72 h-72 rounded-full object-cover border-4 border-gray-100 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Section padding="py-24">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">Languages</h3>
                <p className="text-gray-600 text-sm">JavaScript · TypeScript</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">
                  React.js · Next.js · Tailwind CSS
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">Backend</h3>
                <p className="text-gray-600 text-sm">
                  Node.js · NestJS · Express.js
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
