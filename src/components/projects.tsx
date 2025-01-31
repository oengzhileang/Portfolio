import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
const projects = [
  {
    title: "DAVI Landing page",
    description: "A modern application built with Next.js and Typescript",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://d1zbcbwimmw9mn.cloudfront.net/",
    image: "/images/landing.png",
  },
  {
    title: "DAVI Dashboard",
    description: "A modern application built with React and Typescript",
    tech: ["React", "Typescript"],
    link: "#",
    image: "/images/dashboard.png",
  },
  {
    title: "Ecofresh",
    description: "Project management tool with team collaboration features",
    tech: ["Next.js", "Typescript"],
    link: "https://ecofresh.vercel.app/",
    image: "/images/Ecofresh.jpg",
  },
];

export function Projects() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-center mb-8">
        <span className="text-4xl font-bold">Featured </span>
        <span className="text-4xl font-bold text-blue-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-black border border-slate-800 group hover:shadow-lg transition-all duration-300 overflow-hidden rounded-none"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  className="text-white flex items-center gap-2 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-gray-900 hover:bg-blue-200 hover:text-black"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
