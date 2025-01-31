"use client";

import Image from "next/image";
const techStack = [
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs-icon.svg",
    color: "text-white",
  },

  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss.svg",
    color: "text-cyan-400",
  },
  {
    name: "Express.js",
    icon: "/icons/express.svg",
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    color: "text-green-500",
  },
  {
    name: "AWS",
    icon: "/icons/aws.svg",
    color: "text-orange-500",
  },
];

export function About() {
  return (
    <section className="container mx-auto py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center mb-2">
          <span className="text-4xl font-bold">About </span>
          <span className="text-4xl font-bold text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Image Section */}
          <div className="relative">
            <div className="w-[500px] h-[500px] relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <Image
                src="/images/me.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="bg-white absolute inset-0 rounded-2xl overflow-hidden transform -rotate-3 -z-10 bg-blue-500/10" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 text-lg">
              <p className="text-gray-300">
                As a Full-Stack Developer, I bring a comprehensive approach to
                web development, combining front-end finesse with back-end
                robustness. My journey in tech has equipped me with the skills
                to architect complete solutions, from responsive user interfaces
                to scalable server architectures.   I thrive on staying ahead of technology trends and continuously
                expanding my skill set. My experience spans modern web
                frameworks and cloud technologies, enabling me to deliver
                solutions that are not just functional, but future-proof.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-4 gap-6">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="relative w-12 h-12">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          className="object-contain transition-transform hover:-translate-y-1"
                        />
                      </div>
                      <span className={`text-sm font-medium ${tech.color}`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
