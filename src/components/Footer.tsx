import React from "react";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Mark P. Thomassen",
    designation: "Frontend Developer",
    image: "/images/profile.webp",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="border rounded-3xl">
        <div className="flex flex-col items-center gap-8 p-8">
          <div>
            <AnimatedTooltip items={people} />
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Mark424e" target="_blank">
              {" "}
              <Github className="h-[1.2rem] w-[1.2rem]" size="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/markphillip1800/"
              target="_blank"
            >
              {" "}
              <Linkedin className="h-[1.2rem] w-[1.2rem]" size="icon" />
            </a>
          </div>
        </div>
        <div className="grid justify-center bg-black/20 rounded-b-3xl py-3">
          <p>Made with ❤</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
