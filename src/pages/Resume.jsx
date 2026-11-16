import { motion } from 'framer-motion';
import { Section, Container, Button, Card } from '../components/ui';

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
              <Button
                asChild
                variant="primary"
                className="px-8 py-3"
              >
                <a href="/resume.pdf" download>Download PDF</a>
              </Button>
            </div>

            <div className="mt-16 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <span className="font-medium text-gray-700">Resume Preview</span>
                <span className="text-xs text-gray-500">4.3 MB · PDF</span>
              </div>
              <embed
                src="/resume.pdf"
                type="application/pdf"
                className="w-full h-[80vh] md:h-[600px] border-0"
                title="Resume preview"
              />
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline text-sm"
                >
                  Open PDF in new tab
                </a>
                <span className="text-gray-400 text-xs hidden sm:inline">·</span>
                <a
                  href="/resume.pdf"
                  download
                  className="text-black underline text-sm"
                >
                  Download Resume
                </a>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                If the preview does not appear, use the links above to open or
                download the resume.
              </p>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Having trouble viewing?{' '}
              <a href="/resume.pdf" download className="text-black underline">
                Download directly
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
