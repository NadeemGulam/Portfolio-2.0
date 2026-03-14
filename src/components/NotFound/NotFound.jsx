import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fadeIn, textVariant } from "../../utils/motion";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      {/* Decorative shapes */}
      <div className="notfound__shape notfound__shape--1" />
      <div className="notfound__shape notfound__shape--2" />

      <motion.h1
        className="notfound__code"
        variants={textVariant(0.1)}
        initial="hidden"
        animate="show"
      >
        404
      </motion.h1>

      <motion.h2
        className="notfound__title"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
      >
        Oops! Page not found
      </motion.h2>

      <motion.p
        className="notfound__text"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
      >
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        animate="show"
      >
        <Link to="/" className="notfound__home">
          <IoArrowBack />
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
