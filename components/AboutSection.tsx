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
            <p>
              Ik ben Neo (zoals in The Matrix). Al vanaf jongs af ben ik
              geïntreseerd door computers en hoe ze werken. Dit is uit de hand
              gelopen tot mijn skill.
            </p>
            <div className="socials">
              <a
                href="https://www.instagram.com/neo.the.one.1/"
                target="_blank"
                className="btn ig"
              />
              <a
                href="https://github.com/neotje"
                target="_blank"
                className="btn git"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
