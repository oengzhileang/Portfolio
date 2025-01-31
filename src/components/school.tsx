import { Calendar, CheckCircle, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    institution: "DAVI",
    period: "Sep - Dec, 2024",
    title: "Full Stack Web Development At SabaCode Bootcamp 5",
    achievements: [
      {
        title: "Frontend Development",
        description:
          "Developed a responsive and dynamic frontend using Next.js, TypeScript, and Tailwind CSS.",
      },
      {
        title: "Backend Implementation",
        description:
          "Implemented a scalable backend using Node.js, Express, and MongoDB, with API documentation created using Tsoa.",
      },
      {
        title: "Component Development",
        description:
          "Enhanced component-based UI development and collaboration using Storybook for visual testing.",
      },
      {
        title: "Testing and Deployment",
        description:
          "Maintained code quality with unit and integration tests using Jest. Automated deployment pipelines using CI/CD workflows, Docker, leveraging SST (Serverless Stack).",
      },
      {
        title: "Key Features",
        description:
          "Get data from import and also scraping from url then visualize to chart",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "CI/CD",
      "WebSocket",
      "Jest",
    ],
  },
];

export function SchoolExperience() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="text-4xl font-bold">School </span>
          <span className="text-4xl font-bold text-blue-500">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black p-8 border border-slate-800 hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.institution}</h3>
                  <h4 className="text-xl mb-2">{exp.title}</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex gap-3">
                    <CheckCircle className="w-5 h-5  mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className=" bg-gray-700"
                  >
                    <Code2 className="w-3 h-3 mr-1" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
