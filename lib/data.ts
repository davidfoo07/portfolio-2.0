import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Unilah_frontpage from "@/public/Unilah_frontpage.png";
import One2Sell_frontpage from "@/public/One2Sell_frontpage.png";
import Dental_Software_frontpage from "@/public/Dental_Software_frontpage.png";

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
        title: "Year 3 Undergraduate",
        location: "National University of Singapore (NUS)",
        description: "I am currently a year 3 undergraduate majoring in computer science in NUS.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - Present",
    },
    {
        title: "Software Developer Intern",
        location: "Kuala Lumpur, Malaysia",
        description: "I worked as a software developer intern for 3 months in a startup called Unilah.",
        icon: React.createElement(CgWorkAlt),
        date: "May - August 2024",
    },
    {
        title: "Freelancer",
        location: "Singapore",
        description:
            "I sometimes work as a frontend developer as a freenlancer if my friend's company need a big UI shift.",
        icon: React.createElement(FaReact),
        date: "Present",
    },
] as const;

export const projectsData = [
    {
        title: "Unilah App",
        description:
            "I worked as a frontend developer on this startup project for 3 months. It is to refurbish the app with a new interface.",
        tags: ["React Native", "Typescript", "SQL", "Tailwind", "Prisma"],
        imageUrl: Unilah_frontpage,
    },
    {
        title: "One2Sell",
        description:
            "I was a full-stack developer building this e-commerce app from scratch for my school summmer project. Users can buy or sell goods inside.",
        tags: ["React", "Firebase", "Redux"],
        imageUrl: One2Sell_frontpage,
    },
    {
        title: "Dental Software ",
        description:
            "I worked in a team of 4 over the summer break building this dental software for a friend's dentist relative to digitalise his dental care procedures.",
        tags: ["React", "Firebase", "Tailwind", "Redux"],
        imageUrl: Dental_Software_frontpage,
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
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
