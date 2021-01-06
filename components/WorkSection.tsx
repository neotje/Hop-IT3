import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useViewportScroll
} from "framer-motion";
import { util } from "../libs/util";
import LinkBtn from "./linkbtn/LinkBtn";

import "./WorkSection.css";

const open = {
  width: 0,
  transition: { duration: 1, ease: "easeOut" }
};

export default function WorkSection() {
  const { scrollY } = useViewportScroll();

  const firstEl = useRef(null);
  const firstElControls = useAnimation();

  useEffect(() => {
    function onScroll(): void {
      if (util.elemScrollProgress(firstEl.current) == 1) {
        firstElControls.start(open);
      }
    }

    onScroll();
    const unsub = scrollY.onChange(onScroll);

    return unsub;
  });

  return (
    <div className="work">
      <div className="top" />
      <div className="wrap">
        <h1>Mijn Werk</h1>
      </div>
      <div className="wrap-wide">
        <div className="block" ref={firstEl}>
          <img src="https://drive.google.com/uc?export=download&id=1z5GLirGP8AZuXftym0dLov1s0i8qYt5o" />
          <div className="info">
            <h2 className="title">Wie Wat Waar</h2>
            <h2 className="type">Website</h2>
            <p className="description">
              Wie Wat Waar geeft je inzicht in retailformules door middel van
              zoeken, filteren en exporteren van data.
            </p>
            <LinkBtn href="https://wiewatwaaronline.nl/">Naar website</LinkBtn>
          </div>
          <motion.div
            className="overlay"
            initial={{ width: "100%" }}
            animate={firstElControls}
          />
        </div>
      </div>
    </div>
  );
}
