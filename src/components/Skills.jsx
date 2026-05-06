import { motion } from "framer-motion";

import Javascript from "../assets/images/logos/javascript.svg";
import ReactJs from "../assets/images/logos/react-js.svg";
import NodeJs from "../assets/images/logos/nodejs.svg";
import Express from "../assets/images/logos/express-js.svg";
import MongoDB from "../assets/images/logos/mongodb.svg";
import Redux from "../assets/images/logos/redux.svg";
import Tailwind from "../assets/images/logos/tailwind-css.svg";
import PostgreSql from "../assets/images/logos/postgresql.svg";
import FramerMotion from "../assets/images/logos/framer-motion.svg";
import Git from "../assets/images/logos/git.svg";
import Github from "../assets/images/logos/github.svg";
import Postman from "../assets/images/logos/postman.png";
import Code from "../assets/images/logos/code.svg";
import Figma from "../assets/images/logos/figma.svg";
import Python from "../assets/images/logos/python.png";
import Mysql from "../assets/images/logos/mysql.png";
import Typescript from "../assets/images/logos/typescript.png";
import Docker from "../assets/images/logos/docker.png";
import Cplusplus from "../assets/images/logos/c++.svg";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { imageSrc: Javascript, name: "JavaScript", desc: "Programming Language", className: "bg-yellow-300/50" },
      { imageSrc: Typescript, name: "TypeScript", desc: "Typed JavaScript", className: "bg-blue-500/40" },
      { imageSrc: Python, name: "Python", desc: "Programming Language", className: "bg-yellow-500/30" },
      { imageSrc: Cplusplus, name: "C++", desc: "Programming Language", className: "bg-blue-800/30" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { imageSrc: ReactJs, name: "React", desc: "Frontend Library", className: "bg-cyan-400/40" },
      { imageSrc: Redux, name: "Redux", desc: "State Management", className: "bg-indigo-600/40" },
      { imageSrc: Tailwind, name: "Tailwind CSS", desc: "CSS Framework", className: "bg-sky-400/40" },
      { imageSrc: FramerMotion, name: "Framer Motion", desc: "Animation Library", className: "bg-violet-500/30" },
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { imageSrc: NodeJs, name: "Node.js", desc: "Runtime Environment", className: "bg-green-500/40" },
      { imageSrc: Express, name: "Express.js", desc: "Backend Framework", className: "bg-gray-300" },
      { imageSrc: MongoDB, name: "MongoDB", desc: "NoSQL Database", className: "bg-green-500/40" },
      { imageSrc: PostgreSql, name: "PostgreSQL", desc: "Relational Database", className: "bg-blue-700/40" },
      { imageSrc: Mysql, name: "MySQL", desc: "SQL Database", className: "bg-blue-600/40" },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { imageSrc: Git, name: "Git", desc: "Version Control", className: "bg-orange-500/30" },
      { imageSrc: Github, name: "GitHub", desc: "Code Hosting", className: "bg-gray-300" },
      { imageSrc: Docker, name: "Docker", desc: "Containerization", className: "bg-sky-500/30" },
      { imageSrc: Postman, name: "Postman", desc: "API Testing", className: "bg-orange-400/30" },
      { imageSrc: Figma, name: "Figma", desc: "UI/UX Design", className: "bg-pink-500/30" },
      { imageSrc: Code, name: "VS Code", desc: "Code Editor", className: "bg-blue-900/40" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-8 bg-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl text-white font-inter font-bold mb-12"
          style={{ textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" }}
        >
          Skills
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-inter uppercase tracking-widest text-gray-500 mb-4 font-semibold">
                {group.label}
              </p>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-lg border border-gray-700/50 cursor-default"
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(139,92,246,0.5)",
                      boxShadow: "0 0 16px rgba(139,92,246,0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 ${skill.className}`}>
                      <img
                        src={skill.imageSrc}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-gray-100 font-mulish font-semibold text-base leading-tight">
                        {skill.name}
                      </p>
                      <p className="text-xs font-inter text-gray-400 mt-0.5">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
