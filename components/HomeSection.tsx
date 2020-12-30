import React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import "./HomeSection.css";

export default class HomeSection extends Component {
  render() {
    return (
      <div className="home">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="slogan"
        >
          Have a Problem? Just
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          className="title"
        >
          Hop-IT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="profession"
        >
          <span className="first">Full</span>-
          <span className="second">Stack</span> Developer
        </motion.div>
      </div>
    );
  }
}
