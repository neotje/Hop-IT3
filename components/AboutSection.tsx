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
          <div className="info-block">
            <p>Ik ben Neo (zoals in The Matrix)</p>
            <div className="socials">
              <a
                href="https://www.instagram.com/neo.the.one.1/"
                className="btn"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
