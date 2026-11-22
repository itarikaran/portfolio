import { motion } from 'framer-motion';
import { Section, Container, Badge, Button, GradientText, Card } from '../components/ui';
import { skills } from '../data/skills';

export default function About() {
  return (
    <div className="bg-white">
      <Section padding="py-24">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <img
                src="/arikaran.png"
                alt="Ari Karan - Profile"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="448"
                height="448"
                className="w-full max-w-md aspect-square rounded-xl shadow-lg border border-gray-100 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="black">Java Full Stack Developer</Badge>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="text-4xl font-bold leading-tight mb-6"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
                className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
              >
                Aspiring Java Full Stack Developer pursuing a B.E. in Computer
                Science and Engineering, with hands-on experience building
                full-stack web applications using Java, Spring Boot, Spring Data
                JPA, React.js, and PostgreSQL. Skilled in developing RESTful
                APIs, implementing backend business logic, integrating relational
                databases using Hibernate, and building responsive user interfaces.
                Strong understanding of Object-Oriented Programming, Data Structures
                and Algorithms, and layered architecture. Interested in developing
                scalable, secure, and maintainable enterprise applications.
              </motion.p>
              <Button asChild>
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="py-24">
        <Container>
          <h2 className="text-3xl font-bold mb-10">Education</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className="relative pl-12 border-l border-gray-200"
            >
              <span className="absolute -left-[9px] top-0 block w-4 h-4 rounded-full bg-black border-4 border-gray-100" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">B.E — Computer Science & Engineering</h3>
                <span className="text-sm font-medium text-gray-600">Expected 2027</span>
              </div>
              <p className="text-gray-900 font-medium mb-1">V V College of Engineering</p>
              <p className="text-sm text-gray-600 mb-3">CGPA: 8.28 / 10</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className="relative pl-12 border-l border-gray-200"
            >
              <span className="absolute -left-[9px] top-0 block w-4 h-4 rounded-full bg-black border-4 border-gray-100" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Diploma — Computer Engineering</h3>
                <span className="text-sm font-medium text-gray-600">2021</span>
              </div>
              <p className="text-gray-900 font-medium mb-1">RECT Polytechnic College</p>
              <p className="text-sm text-gray-600 mb-3">CGPA: 9.40 / 10</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section padding="py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-10">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: 'Infosys Springboard', title: 'Learn Coding with Java' },
              { category: 'Infosys Springboard', title: 'Spring 5 Basics with Spring Boot' },
              { category: 'Infosys Springboard', title: 'Spring Data JPA with Boot' },
              { category: 'Infosys Springboard', title: 'Spring REST' },
              { category: 'NPTEL', title: 'Programming in Java' },
              { category: 'NPTEL', title: 'Data Structures and Algorithms using Java' },
            ].map((cert) => (
              <Card key={cert.title} padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{cert.category}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="py-24">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">ORM</h3>
              <div className="flex flex-wrap gap-2">
                {skills.orm.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card padding="p-6" hover={false}>
              <h3 className="text-lg font-bold mb-4">API</h3>
              <div className="flex flex-wrap gap-2">
                {skills.api.map((s) => (
                  <Badge key={s} variant="subtle" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
