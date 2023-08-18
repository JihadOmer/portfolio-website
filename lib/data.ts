import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cms from "@/public/cms.jpg";
import portfolio from "@/public/portfolio.jpg";
import restaurant from "@/public/restaurant.jpg";

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
      " Contributing to the development and upkeep of software tailored for internal use or by charitable organizations to empower refugees and individuals from low-income backgrounds to start a career in tech",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - current",
  },
] as const;

export const projectsData = [
  {
    title: "MunchyMaster",
    description:
      " https://munchymaster.netlify.app \n  Full stack app for busy developer!! which allows them to list, review and price their favourite restaurants so they can quickly decide their next meal without any hassle !!",
    tags: ["React", "Node.js", "Postgres", "Express"],
    imageUrl: restaurant,
  },
  {
    title: "CMS for Charity Orginization ",
    description:
      "https://starter-kit-fhvk.onrender.com \n  Contributed to a team of 6 devs in an Agile/ Scrum environment to build a Content Management System (CMS) for an overseas charity to help them to show their work to the public.",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Ant Design"],
    imageUrl: cms,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "a website to let visitors to know more about me, my latest and upcoming projects ",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    imageUrl: portfolio,
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
