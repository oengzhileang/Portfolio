"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center text-center h-[900px]">
        <Terminal className="w-16 h-16 mb-6 text-primary animate-pulse" />
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Hello, I&apos;m Oeng zhileang
        </h1>
        <p className="text-4xl text-muted-foreground mb-8">
          Full Stack Developer
        </p>
        <p className="text-xl text-muted-foreground mb-8 w-[600px]">
          I am a Full Stack Developer with expertise in Next.js, React.js, and
          Node.js development. Design and implement responsive interfaces while
          integrating backend solutions using Express and MongoDB.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://expressapidocker.s3.ap-southeast-1.amazonaws.com/cv.pdf"
            target="_blank"
            className="bg-white text-black text-center flex justify-center items-center p-2 px-4 hover:bg-blue-500 hover:text-white"
          >
            View resume
          </Link>
          {/* <Button>View resume</Button> */}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open("https://github.com/oengzhileang", "_blank")
            }
          >
            <Github className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/oeng-zhileang", "_blank")
            }
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
