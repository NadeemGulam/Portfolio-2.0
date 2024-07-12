import React from "react";
import Header from "./../header/header.jsx";
import Nav from "./../nav/nav.jsx";
import About from "./../about/About.jsx";
import Experience from "./../Experience/Experience.jsx";
import Services from "./../services/services.jsx";
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
