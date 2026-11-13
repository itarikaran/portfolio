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
                alt="Profile"
                className="w-full max-w-md rounded-xl shadow-lg border border-gray-100 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="black">MERN Stack Developer</Badge>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold leading-tight mb-6"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
              >
                MERN Stack Developer with hands-on experience building
                full-stack web applications using React.js, Node.js,
                Express.js, and MongoDB. Skilled in developing RESTful
                APIs, implementing JWT authentication, managing databases,
                and creating responsive user interfaces. Strong foundation
                in JavaScript, problem-solving, and Git-based development,
                with a focus on building scalable web applications.
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
              transition={{ delay: 0.1 }}
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
              {
                title: 'Advanced MERN Development',
                date: 'March 2026',
                url: 'https://infyspringboard.onwingspan.com/web/certificate',
              },
              {
                title: 'MERN Stack',
                date: 'February 2026',
                url: 'https://mylearning.excelr.com/course/globe-in/certificate',
              },
              {
                title: 'Introduction to MERN Stack',
                date: 'January 2026',
                url: 'https://simpli-web.app.link/e/Asxannu2Z7b',
              },
            ].map((cert) => (
              <Card key={cert.title} padding="p-6" hover={false}>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{cert.date}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-violet-600 hover:text-violet-700 underline"
                >
                  View Certificate →
                </a>
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
          </div>
        </Container>
      </Section>
    </div>
  );
}