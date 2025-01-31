"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "SABAI CODE",
    period: "2024",
    title: "Full-Stack Web Development Training Bootcamp 5",
    description:
      "Intensive training in modern web development technologies and practices",
    tags: ["Full-Stack Development"],
    icon: <Code2 className="w-5 h-5" />,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    institution: "Royal University of Phnom Penh",
    period: "2021 - Present",
    title: "Information Technology",
    description: "Comprehensive study information technology",
    tags: ["IT"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-green-500/10 text-green-500",
  },
  {
    institution: "Paññāsāstra University of Cambodia",
    period: "2022- 2024",
    title: "English Diploma",
    description: "Study English",
    tags: ["English"],
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-red-500/10 text-red-500",
  },
];

export function Education() {
  return (
    <section className="container mx-auto py-16">
      {/* <h2 className="text-3xl font-bold mb-2 text-center">Educational Journey</h2> */}
      <h2 className="text-center mb-12">
        <span className="text-4xl font-bold">Education </span>
        <span className="text-4xl font-bold text-blue-500">Journey</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        My academic path in technology and web development
      </p>

      <div className=" mx-auto relative">
        <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-borde bg-blue-300`} />

        {educationData.map((item, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10`}
            />

            <div
              className={`${
                index % 2 === 0
                  ? "mr-auto pr-8 md:mr-[50%] md:pr-12"
                  : "ml-auto pl-8 md:ml-[50%] md:pl-12"
              } w-full md:w-[calc(50%-1rem)]`}
            >
              <Card className="relative bg-black w-full border border-slate-800 rounded-none hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2  ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.institution}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
