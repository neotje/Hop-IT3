import React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import "./ContactSection.css";

export default class ContactSection extends Component {
  render() {
    return (
      <div className="contact">
        <div className="wrap-wide">
          <div className="info">
            <h1>
              Contact<span>:</span>
            </h1>
            <h2>Contactgegevens</h2>
            <p>neo@hopjes.net</p>
            <p>+31 6 39775282</p>

            <h2>Bedrijfsgegevens</h2>
            <p>KvK: 76729176</p>
            <p>BTW: NL003129917B08</p>
          </div>
        </div>
      </div>
    );
  }
}
