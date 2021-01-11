import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { util } from "../../libs/util";

import "./Carousel.css";

type CarouselItemProps = {
  title: string;
  type: string;
  img: string;
  link: string;
};

export default function CarouselItem({
  title,
  type,
  img,
  link
}: CarouselItemProps) {
  return (
    <a href={link} target="_blank" className="item">
      <div className="block">
        <img src={img} width="400px" />
        <h2 className="title">{title}</h2>
        <h2 className="type">{type}</h2>
      </div>
    </a>
  );
}
