import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container, Badge, Button, Card } from '../components/ui';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const stacks = [...new Set(projects.flatMap((p) => p.stack))].sort();

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.stack.includes(filter));

  return (
    <div className="bg-white">
      <Section padding="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
              <p className="text-gray-600">A curated showcase of work.</p>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              <Button
                variant={filter === 'all' ? 'black' : 'ghost'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              {stacks.map((stack) => (
                <Button
                  key={stack}
                  variant={filter === stack ? 'black' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter(stack)}
                >
                  {stack}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group relative"
              >
                <Card padding="p-6" hover className="overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {project.duration}
                    </span>
                    <Badge variant="violet" className="text-xs">
                      Case Study
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tag) => (
                      <Badge key={tag} variant="subtle">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="text" size="sm" asChild>
                      <Link to={`/project/${project.id}`}>View Details</Link>
                    </Button>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 hover:text-black underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}