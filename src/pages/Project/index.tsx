import { Badge } from "@/common/components/ui/Badge";
import { Button } from "@/common/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/common/components/ui/Card";
import { Github, Globe } from "lucide-react";
import { dataProject } from '@/data/dataProject';

export interface Project {
  title: string;
  description: string;
  image: string;
  deploy: string | null;
  github: string;
  tech: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="w-full bg-card border-0 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative w-full aspect-video overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-base">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-3">
          {project.deploy && (
            <Button size="sm" className="transition-all duration-300 hover:scale-105" asChild>
              <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Deploy
              </a>
            </Button>
          )}
          {project.github && (
            <Button size="sm" className="transition-all duration-300 hover:scale-105" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectSection = () => {
  return (
    <section className="w-full py-12 space-y-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mis Proyectos
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Explora mi portafolio de proyectos desarrollados con tecnologías modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {dataProject.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;