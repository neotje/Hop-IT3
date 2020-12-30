import React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import "./AboutSection.css";

export default class AboutSection extends Component {
  calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <div className="about">
        <div className="bottom" />
        <div className="wrap">
          <h1>
            Over mij<span>:</span>
          </h1>
        </div>

        <div className="wrap-wide">
          <div className="img-block" />
          <div className="info-block">
            <div className="block">
              <div className="age-block">
                <h2>{this.calculateAge(new Date(2002, 4, 3))}</h2>
                <h3>jaar oud</h3>
              </div>
              <p>
                Ik ben Neo (zoals in The Matrix). Al vanaf jongs af aan ben ik
                geïntreseerd in computers. Dit is uit de hand gelopen tot mijn
                skill.
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
      </div>
    );
  }
}
