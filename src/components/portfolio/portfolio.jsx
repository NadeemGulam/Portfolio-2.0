import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.jpg";
import IMG2 from "./../../assets/portfolio2.jpg";
import IMG3 from "./../../assets/portfolio3.jpg";
import IMG4 from "./../../assets/portfolio4.jpg";
import IMG5 from "./../../assets/portfolio5.jpg";
import IMG6 from "./../../assets/portfolio6.jpg";
import moreprojects from "./../../assets/moreprojects.jpg";
import {
  Link
} from "react-router-dom";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "IOT BASED ACCIDENT IDENTIFICATION AND PREVENTION SYSTEM",
    github: "https://github.com/NadeemGulam/Implementation_of_IOT_based_accident_idemtification_and_prevention_system",
    demo: "https://drive.google.com/file/d/17b_pP8I9hPOy50OPmknXHC8StlmRcrhU/view?usp=sharing,%20https://drive.google.com/file/d/1K0RZQMw6oZP1BLjH85bfJP08M50KEp9a/view?usp=sharing,%20https://drive.google.com/file/d/1ojeLkxNTDHKxkywwLjXsJaqQQ9P2O1OO/view?usp=sharing,%20https://drive.google.com/file/d/1xKB7ThiLx2DzeVw_umPfMFvVuGarcUM7/view?usp=sharing",
  },
  {
    id: 2,
    image: IMG2,
    title: "RECIPE SEARCH APP USING REACT LIBRARY",
    github: "https://github.com/NadeemGulam/Recipe-App-With-React", 
    demo: "https://boisterous-capybara-4ee6f8.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "CHAT APPLICATION USING REACT LIBRARY",
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
  {
    id: 6,
    image: IMG6,
    title: "Parking slot Detection using Arduino",
    github: "https://github.com/NadeemGulam/Parking-slot-detection-using-Arduino",
    demo: "https://google.com",
   }
  ,
  {
    id: 7,
    image: IMG6,
    title: "Parking slot Detection using Arduino",
    github: "https://github.com/NadeemGulam/Parking-slot-detection-using-Arduino",
    demo: "https://google.com",
  }
  ,
  {
    id: 8,
    image: IMG6,
    title: "Parking slot Detection using Arduino",
    github: "https://github.com/NadeemGulam/Parking-slot-detection-using-Arduino",
    demo: "https://google.com",
  }
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
                <img src={i.image} alt={i.title} />
              </div>
              <h3>{i.title}</h3>
              <div className="portfolio__item-cta">
                <a href={i.github} className="btn" target="-blank">
                  Github
                </a>
                <a href={i.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
     
         {/* Static card for moreProjects */}
         <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={moreprojects} alt={"MoreProjects"} className="project-image"/>
              </div>
              <h3>Click here to see more projects</h3>
              <div className="portfolio__item-cta"> 
                <Link to='/Portfolio-2.0/more-projects' className="btn" >More Projects</Link>
              </div>
            </article>
            </div>
      </section>
    </>
  );
};

export default portfolio;