import React, { Component } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";

import "./style.css";

class App extends Component {
  homeRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;

  constructor(props) {
    super(props);

    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  scrollTo(ref: React.RefObject<HTMLElement>) {
    ref.current.scrollIntoView();
  }

  render() {
    return (
      <div>
        <NavBar />
        <section id="home" ref={this.homeRef}>
          <HomeSection />
          <motion.div
            className="next-button"
            onClick={() => {
              this.scrollTo(this.aboutRef);
            }}
            initial={{ y: "-100%", x: "-50%" }}
            animate={{ y: "-110%", x: "-50%" }}
            transition={{
              type: "spring",
              delay: 3,
              repeatDelay: 5,
              duration: 1,
              damping: 20,
              mass: 4,
              stiffness: 1000,
              repeat: Infinity
            }}
          >
            <span className="material-icons">expand_more</span>
          </motion.div>
        </section>
        <section id="about" ref={this.aboutRef}>
          <AboutSection />
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
