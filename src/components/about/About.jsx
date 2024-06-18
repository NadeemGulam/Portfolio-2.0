import React from "react";
import "./About.css";
import ME from "../../assets/nadeem.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Coding Rank</h5>
              <small>ranked at 15th in entire college</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>
          <p className="about__intro">
            Hi, Nadeem here! I'm currently working at Fidelity Investments,
            focusing on Angular and GraphQL development. With a solid background
            in frontend development and software engineering, I've built robust
            applications using the MERN stack, Next.js, and more. I'm passionate
            about solving complex problems and continuously enhancing my skills.
            I'm constantly excited to pick up new skills and take on challenges.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
