import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import "./LoadingState.css";

const LoadingState = ({ message = "Loading" }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.15)}
      initial="hidden"
      animate="show"
      className="loading-state"
    >
      <div className="loading-state__spinner">
        <div className="loading-state__ring" />
        <div className="loading-state__ring-glow" />
      </div>

      <span className="loading-state__text">
        {message}
        <span className="loading-state__dots" />
      </span>

      <div className="loading-state__shimmer">
        <div className="loading-state__shimmer-bar" />
      </div>
    </motion.div>
  );
};

export default LoadingState;
