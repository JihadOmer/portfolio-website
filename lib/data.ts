
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MunchyMaster from "@/public/MunchyMaster.jpg";
import Cms from "@/public/Cms.jpg";
import Portfolio from "@/public/Portfolio.jpg";

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
      "I am actively engaged in the development and upkeep of cutting-edge software tailored for internal use or by charitable organizations, empowering refugees and individuals from low-income backgrounds to embark on transformative tech careers.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - current",
  },
] as const;

export const projectsData = [
  {
    title: "MunchyMaster",
    description:
      "A Full stack app which allows user to list their favourite restaurants and also add a review and pricing range to allow them to quickly decide their next meal !!",
    tags: ["React", "Node.js", "Postgres", "Express"],
    imageUrl: MunchyMaster,
  },
  {
    title: "CMS for Charity Orginization ",
    description:
      "Contributed to a team of 6 devs in an Agile/ Scrum environment to build a CMS for an overseas charity to help them to show their work to the public.",
    tags: ["React", "Node.js", "Postgres", "Express", "Ant Design"],
    imageUrl: Cms,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Proudly built THIS personal website to let visitors to know more about me, my latest and upcoming projects ",
    tags: ["Next.js", "Node.js", "TypeScript", "Express.js", "TailwindCSS"],
    imageUrl: Portfolio,
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
  "MongoDB",
  "Docker",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Cypress",
  "Jest",
  "Agile Workflow",
] as const;
