import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
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

  const elements = [useRef(null), useRef(null), useRef(null)];

  const controls = [useAnimation(), useAnimation(), useAnimation()];

  useEffect(() => {
    function onScroll(): void {
      for (var i = 0; i < elements.length; i++) {
        if (util.elemScrollProgress(elements[i].current, 200) === 1) {
          controls[i].start(open);
        }
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
        <div className="block normal" ref={elements[0]}>
          <img src="images/macbook-www.png" alt=""/>
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
            animate={controls[0]}
          />
        </div>

        <div className="block reverse" ref={elements[1]}>
          <img src="images/macbook-infographic.png" alt=""/>
          <div className="info">
            <h2 className="title">Supermarktformules infographic</h2>
            <h2 className="type">Website</h2>
            <p className="description">
              Overzichtelijk aantal winkels per formule per jaar zien.
            </p>
            <LinkBtn href="https://distrifooddynamics.nl/infographic-supermarktformules/">
              Naar distrifood
            </LinkBtn>
          </div>
          <motion.div
            className="overlay"
            initial={{ width: "100%" }}
            animate={controls[1]}
          />
        </div>

        <div className="block normal" ref={elements[2]}>
          <img src="images/macbook-slarisnet.png" alt=""/>
          <div className="info">
            <h2 className="title">Salarisnet rekentools</h2>
            <h2 className="type">Website</h2>
            <p className="description">
              Meerdere tools die kosten kunnen berekenen: Bruto-nettoloon,
              bijtelling lease auto, bijtelling fiets van de zaak, AOW-leeftijd,
              Aflossingschema personeelsrekening en Verzuimpercentage.
            </p>
            <LinkBtn href="https://www.salarisnet.nl/">Naar Salarisnet</LinkBtn>
          </div>
          <motion.div
            className="overlay"
            initial={{ width: "100%" }}
            animate={controls[2]}
          />
        </div>
      </div>
    </div>
  );
}
