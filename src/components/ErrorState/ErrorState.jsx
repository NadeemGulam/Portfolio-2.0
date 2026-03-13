import React from "react";
import { motion } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
import { fadeIn } from "../../utils/motion";
import "./ErrorState.css";

const ErrorState = ({ message, onRetry }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      className="error-state"
    >
      <div className="error-state__card">
        <BiErrorCircle className="error-state__icon" />
        <h4 className="error-state__title">Something went wrong</h4>
        <p className="error-state__message">{message}</p>
        {onRetry && (
          <button className="error-state__retry" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorState;
