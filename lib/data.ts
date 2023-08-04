import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Developer @ CodeYourFuture",
    location: "Manchester, UK",
    description:
      "I contrubutng in building and maintaing software that can are used in-house or by charities to help Refugee and low income individual and in tech to find a job in tech.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - current",
  },
] as const;

export const projectsData = [
  {
    title: "MunchyMaster",
    description:
      "A Full stack app which allows user to list their favourite restaurants and also add a review and pricing range to allow them to quickly decide their next meal !",
    tags: ["React", "Node.js", "Postgres", "Express"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CMS for Charity Orginization ",
    description:
      "Contributed to a team of 6 devs in an Agile/ Scrum environment to build a CMS for an overseas charity to help them to show their work to the public.",
    tags: ["React", "Node.js", "Postgres", "Express", "Ant Design"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Proudly built THIS personal website to let visitors to know more about me and my latest and upcoming projects ",
    tags: ["Next.js", "Node.js", "TypeScript", "Express.js", "TailwindCSS"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Cypress",
  "Jest",
  "Agile Workflow",
] as const;
