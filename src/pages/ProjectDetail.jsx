import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container, Badge, Button, Card } from '../components/ui';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Section padding="py-24">
        <Container>
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </Container>
      </Section>
    );
  }

  return (
    <div className="bg-white">
      <Section padding="pt-24 pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {project.duration}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.subtitle}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.stack.map((tag) => (
                  <Badge key={tag} variant="subtle">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <span>Project preview</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== id)
              .slice(0, 3)
              .map((p) => (
                <Card key={p.id} padding="p-6" hover>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                  <Button variant="text" size="sm" asChild>
                    <Link to={`/project/${p.id}`}>View Details</Link>
                  </Button>
                </Card>
              ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}