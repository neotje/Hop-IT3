import React, { useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { App } from "../../index";

import "./NavBar.css";
import logo from "../../images/logo.png";

const list: Variants = {
  visible: {
    height: 202,
    transitionEnd: {
      height: "auto"
    },
    transition: {
      //when: "beforeChildren",
      duration: 0.75,
      staggerChildren: 0.25,
      ease: "linear"
    }
  },
  hidden: {
    height: 68,
    transition: {
      //when: "afterChildren"
      duration: 0.5,
      staggerChildren: 0.166,
      staggerDirection: -1,
      ease: "linear"
    }
  }
};

const item: Variants = {
  visible: {
    opacity: 1,
    scaleY: 1,
    display: "block",
    transition: {
      duration: 0.25,
      ease: "linear"
    }
  },
  hidden: {
    opacity: 0,
    scaleY: 0,
    transitionEnd: {
      display: "none"
    },
    transition: {
      duration: 0.166,
      ease: "linear"
    }
  }
};

type NavBarProps = {
  index: App;
};

export default function NavBar({ index }: NavBarProps) {
  var state = true;
  var initial = "visible";
  if (window.innerWidth < 700) {
    state = false;
    initial = "hidden";
  }

  const [show, setShowing] = useState(state);
  const controls = useAnimation();

  const toggle = () => {
    if (window.innerWidth < 700) {
      setShowing(!show);

      if (!show) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    } else {
      controls.set("visible");
      setShowing(false);
    }
  };

  const onResize = () => {
    if (window.innerWidth > 700) controls.set("visible");
    if (window.innerWidth < 700) {
      controls.set("hidden");
      setShowing(false);
    }
  };

  window.addEventListener("resize", onResize);

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="navbar"
    >
      <motion.ul
        initial={initial}
        //animate={controls}
        variants={list}
        animate={controls}
        className="menu"
      >
        <li
          className="logo"
          onClick={() => {
            document.scrollingElement.scrollTo(0, 0);
          }}
        >
          <img className="logo" src={logo} alt="logo"/>
        </li>

        <motion.li
          variants={item}
          className="item"
          onClick={() => {
            index.scrollTo(index.aboutRef);
            toggle();
          }}
        >
          Over mij
        </motion.li>
        <motion.li
          variants={item}
          className="item"
          onClick={() => {
            index.scrollTo(index.workRef);
            toggle();
          }}
        >
          Mijn werk
        </motion.li>
        <motion.li
          variants={item}
          className="item"
          onClick={() => {
            index.scrollTo(index.contactRef);
            toggle();
          }}
        >
          Contact
        </motion.li>

        <li className="toggle" onClick={toggle}>
          <span className="material-icons">{show ? "close" : "menu"}</span>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
