import React, { Component } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import NavBar from "./components/NavBar";

import "./style.css";
import WorkSection from "./components/WorkSection";

export class App extends Component {
  homeRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  workRef: React.RefObject<HTMLElement>;

  constructor(props) {
    super(props);

    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
  }

  scrollTo(ref: React.RefObject<HTMLElement>) {
    ref.current.scrollIntoView();
  }

  render() {
    return (
      <div>
        <NavBar index={this} />
        <section id="home" ref={this.homeRef}>
          <HomeSection />

          <motion.div
            className="next-button"
            onClick={() => {
              this.scrollTo(this.aboutRef);
            }}
            initial={{ y: "-110%", x: "-50%" }}
            animate={{ y: "-90%", x: "-50%" }}
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
            <motion.a
              className="material-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1
              }}
            >
              expand_more
            </motion.a>
          </motion.div>
        </section>
        <section id="about" ref={this.aboutRef}>
          <AboutSection />
        </section>
        <section id="work" ref={this.workRef}>
          <WorkSection />
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
