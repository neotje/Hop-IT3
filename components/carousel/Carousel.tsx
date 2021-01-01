import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { util } from "../libs/util";

import "./Carousel.css";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  return <ol className="carousel">{children}</ol>;
}
