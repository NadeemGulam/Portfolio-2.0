import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skills = [
  { category: "Frontend Development", skills: [
    { name: "HTML", level: "Experienced" },
    { name: "Figma", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Angular", level: "Experienced" },
    { name: "Next.js", level: "Intermediate" }
  ]},
  { category: "Backend Development", skills: [
    { name: "Node.js", level: "Experienced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "C++", level: "Experienced" },
    { name: "AWS Cloud", level: "Intermediate" },
    { name: "Java Spring", level: "Intermediate" },
    { name: "Python", level: "Intermediate" }
  ]}
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {skills.map((group) => (
          <div className={`experience__${group.category.toLowerCase().replace(' ', '')}`} key={group.category}>
            <h3>{group.category}</h3>
            <div className="experience__content">
              {group.skills.map((skill) => (
                <article className="experience__details" key={skill.name}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    {" "}
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
