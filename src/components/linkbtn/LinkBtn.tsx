import React from "react";

import "./LinkBtn.css";

type LinkBtnProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkBtn({ children, href }: LinkBtnProps) {
  return (
    <a href={href} className="link-btn" target="_blank" rel="noreferrer">
      <span className="material-icons">east</span>
      <div className="content">{children}</div>
    </a>
  );
}
