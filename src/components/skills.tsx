"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
  devops: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
  tools: ["Git", "VS Code", "Postman", "Figma", "Jest"]
};

export function Skills() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
              <ScrollArea className="h-40">
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}