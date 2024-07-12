import React from "react";
import "./portfolio.css";
import IMG3 from "./../../assets/portfolio3.jpg";
import IMG4 from "./../../assets/portfolio4.jpg";
import IMG5 from "./../../assets/portfolio5.jpg";
import IMG12 from "./../../assets/2.png";
import IMG9 from "./../../assets/portfolio9.png";

import moreprojects from "./../../assets/moreprojects.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: IMG12,
    title: "Pulse Feed ( X ) ",
    github: "https://github.com/NadeemGulam/x-xlone",
    demo: "https://www.youtube.com/watch?v=VW2KkZ_YiyU",
  },
  {
    id: 2,
    image: IMG9,
    title: "Snap Sign",
    github: "https://github.com/NadeemGulam/Snap-Sign",
    demo: "https://snap-sign.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Chat application using React library",
    github: "https://github.com/NadeemGulam/ChatMe",
    demo: "https://chatmenadeemgulam.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "ANIME SEARCH APP USING REACT LIBRARY",
    github: "https://github.com/NadeemGulam/AnimeClub",
    demo: "https://luminous-bienenstitch-e3b727.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "React Based E-Commerce-Website",
    github: "https://github.com/NadeemGulam/React-Based-E-Commerce-Website",
    demo: "https://e-commerce-nadee-gulam.netlify.app/",
  },
];

const portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>portfolio</h2>
        <div className="container portfolio__container">
          {data.map((i) => {
            return (
              <article key={i.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img className="portfolio-image" src={i.image} alt={i.title} />
                </div>
                <h3>{i.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={i.github} className="btn" target="-blank">
                    Github
                  </a>
                  <a
                    href={i.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}

          {/* Static card for moreProjects */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src={moreprojects}
                alt={"MoreProjects"}
                className="project-image"
              />
            </div>
            <h3>Click here to see more projects</h3>
            <div className="portfolio__item-cta">
              <Link to="/more-projects" className="btn">
                More Projects
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default portfolio;
