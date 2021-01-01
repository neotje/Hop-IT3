import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { util } from "../libs/util";

import "./WorkSection.css";
import Carousel from "./carousel/Carousel";
import CarouselItem from "./carousel/CarouselItem";

export default function WorkSection() {
  return (
    <div className="work">
      <div className="top" />
      <div className="wrap">
        <h1>Mijn Werk</h1>
      </div>
      <div className="wrap-wide">
        <Carousel>
          <CarouselItem
            title="WieWatWaar"
            type="Website"
            img="https://drive.google.com/uc?export=download&id=1edNjbK5zxEtP8Tg4AX9sGX8RtnraLAmD"
            link="https://wiewatwaaronline.nl"
          />
          <CarouselItem title="WieWatWaar" type="Website" />
          <CarouselItem title="WieWatWaar" type="Website" />
        </Carousel>
      </div>
    </div>
  );
}
