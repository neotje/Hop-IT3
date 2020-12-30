import React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import "./AboutSection.css";

export default class AboutSection extends Component {
  render() {
    return (
      <div className="about">
        <div className="wrap">
          <h1>
            Over mij<span>:</span>
          </h1>
        </div>

        <div className="wrap-wide">
          <div className="info-block">info</div>
        </div>
      </div>
    );
  }
}
