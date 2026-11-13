import { Section, Container, Button, Card } from '../components/ui';

export default function Resume() {
  return (
    <div className="bg-white min-h-screen">
      <Section padding="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Resume</h1>
            <p className="text-gray-600 text-lg mb-10">
              Download my full resume with detailed work experience, education,
              and skills.
            </p>

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
              <iframe
                src="/resume.pdf"
                className="w-full h-[600px] border-0"
                title="Resume preview"
              />
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