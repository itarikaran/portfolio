import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Section,
  Container,
  GradientText,
  Button,
  Card,
  ScrollReveal,
} from '../components/ui';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                Ari Karan{' '}
                <GradientText className="text-5xl lg:text-7xl">MERN Stack Developer</GradientText>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-600 text-lg lg:text-xl max-w-md leading-relaxed"
              >
                MERN Stack Developer with hands-on experience building
                full-stack web applications using React.js, Node.js,
                Express.js, and MongoDB. Skilled in RESTful APIs, JWT
                authentication, database management, and responsive UIs.
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
            <div className="hidden lg:block">
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
                <h3 className="text-lg font-bold mb-2">JavaScript</h3>
                <p className="text-gray-600 text-sm">ES6+</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">React.js</h3>
                <p className="text-gray-600 text-sm">Frontend</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">Node.js</h3>
                <p className="text-gray-600 text-sm">Backend</p>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}