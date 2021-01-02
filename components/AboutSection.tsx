import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { util } from "../libs/util";

import "./AboutSection.css";

function calculateAge(birthday): number {
  // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function AboutSection() {
  const xOffset = -200;

  const { scrollY } = useViewportScroll();
  const divEl = useRef(null);
  const xMotion = useMotionValue(xOffset);
  const opacityMotion = useMotionValue(0);

  useEffect(() => {
    function onScroll(): void {
      var progress = util.elemScrollProgress(divEl.current);

      xMotion.set((1 - util.clamp(progress * 1.2, 0, 1)) * xOffset);
      opacityMotion.set(util.clamp(progress * 1.2, 0, 1));
    }

    onScroll();
    const unsub = scrollY.onChange(onScroll);

    return unsub;
  });

  return (
    <div className="about" ref={divEl}>
      <div className="bottom" />
      <div className="wrap">
        <h1>
          Over mij<span>:</span>
        </h1>
      </div>

      <div className="wrap-wide">
        <motion.div
          style={{ x: xMotion, opacity: opacityMotion }}
          className="img-block"
        />
        <div className="info-block">
          <div className="block">
            <div className="age-block">
              <h2>{calculateAge(new Date(2002, 4, 3))}</h2>
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
