import React from "react";
import Home from "@/components/home";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Expertise } from "@/components/expertise";
import { Projects } from "@/components/projects";
import { SchoolExperience } from "@/components/school";
import { Contact } from "@/components/contact";
const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Home />
      <About />
      <Expertise />
      <SchoolExperience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default page;
