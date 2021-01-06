import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { util } from "../libs/util";

import "./LinkBtn.css";

type LinkBtnProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkBtn({ children, href }: LinkBtnProps) {
  return (
    <a href={href} className="link-btn" target="_blank">
      <span className="material-icons">east</span>
      <div className="content">{children}</div>
    </a>
  );
}
