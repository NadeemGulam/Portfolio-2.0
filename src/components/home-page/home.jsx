import React from "react";
import Header from "./../header/header.jsx";
import Nav from "./../nav/nav.jsx";
import About from "./../about/About.jsx";
import Experience from "./../Experience/Experience.jsx";
import Services from "./../services/services.jsx";
import Professional from "./../professional/professional.jsx";
import Portfolio from "./../portfolio/portfolio.jsx";
import Testimonial from "./../testimonial/testimonial.jsx";
import Contact from "./../Contact/Contact.jsx";
import Footer from "./../footer/footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Professional/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
