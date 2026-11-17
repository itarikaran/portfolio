import { motion } from 'framer-motion';
import { Section, Container, Button } from '../components/ui';

// Increment the version whenever you update resume.pdf
const resumeUrl = '/resume.pdf?v=2';

export default function Resume() {
  return (
    <div className="bg-white min-h-screen">
      <Section padding="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className="text-4xl font-bold mb-6"
            >
              Resume
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className="text-gray-600 text-lg mb-10"
            >
              Download my full resume with detailed work experience, education,
              and skills.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="primary" className="px-8 py-3">
                <a href={resumeUrl} download="resume.pdf">
                  Download PDF
                </a>
              </Button>

              <Button asChild variant="outline" className="px-8 py-3">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Open Resume
                </a>
              </Button>
            </div>

            <div className="mt-16 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <span className="font-medium text-gray-700">
                  Resume Preview
                </span>
                <span className="text-xs text-gray-500">PDF</span>
              </div>

              <iframe
                key={resumeUrl}
                src={resumeUrl}
                className="w-full h-[600px] border-0"
                title="Resume preview"
                loading="eager"
              />
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Having trouble viewing?{' '}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                Open PDF directly
              </a>
              {' or '}
              <a
                href={resumeUrl}
                download="resume.pdf"
                className="text-black underline"
              >
                Download PDF
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
