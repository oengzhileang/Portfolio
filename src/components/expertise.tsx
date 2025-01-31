import {
  Code,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Paintbrush,
  ClipboardList,
  Container,
} from "lucide-react";

const expertiseData = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    skills: ["HTML", "CSS", "Tailwind", "ReactJS", "NextJS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: ["NodeJS", "Express", "MongoDB"],
  },
  {
    title: "DevOps",
    icon: <Container className="w-6 h-6 text-red-500" />,
    skills: ["Docker", "CI/CD"],
  },
  {
    title: "AWS Services",
    icon: <Cloud className="w-6 h-6 text-orange-500" />,
    skills: ["Cognito", "EC2", "S3" , "Lambda"],
  },
  {
    title: "Testing & Tools",
    icon: <GitBranch className="w-6 h-6 text-yellow-500" />,
    skills: ["Git", "GitHub", "Unit Test", "Integration Testing"],
  },
  {
    title: "UX/UI Design",
    icon: <Paintbrush className="w-6 h-6 text-pink-500" />,
    skills: ["Figma"],
  },
  {
    title: "Project Management",
    icon: <ClipboardList className="w-6 h-6 text-indigo-500" />,
    skills: ["Agile", "Scrum", "Waterfall"],
  },
];

export function Expertise() {
  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Expertise</h2>
        <p className="text-gray-400 text-center mb-12">
          A comprehensive overview of my technical expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseData.map((category, index) => (
            <div
              key={index}
              className=" bg-black p-6 border border-slate-800 hover:border-blue-300 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm bg-gray-900 hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
