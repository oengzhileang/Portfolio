"use client";

import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+855 71 6132 290",
    link: "tel:+855716132290"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "oengzhileang@gmail.com",
    link: "mailto:oengzhileang@gmail.com"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    value: "280.St217 Sangkat Dangkor khan Dangkor,PhnomPenh",
    link: "https://maps.app.goo.gl/Xi6SqsBEtck8hKrHA"
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
    value: "oengzhileang",
    link: "https://github.com/oengzhileang"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
    value: "oengzhileang",
    link: "https://www.linkedin.com/in/oeng-zhileang"
  }
];

export function Contact() {
  return (
    <section className="container mx-auto py-16">
      {/* <h2 className="text-3xl font-bold mb-2 text-center">Get in Touch</h2> */}
      <h2 className="text-center mb-2">
          <span className="text-4xl font-bold">Get in</span>
          <span className="text-4xl font-bold text-blue-500">Touch</span>
        </h2>
      <p className="text-muted-foreground text-center mb-12">
        Feel free to reach out or just a friendly hello
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:-translate-y-1"
          >
            <Card className="h-full   bg-card/50 backdrop-blur-sm border border-slate-800 hover:border-blue-300 rounded-none">
              <CardContent className="p-6 bg-black ">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gray-800 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}