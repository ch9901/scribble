import React from "react";
import "./MainTitle.scss";

export default function MainTitle() {
  return (
    <div className="grid title-block">
      <a href="#" className="mainTitle">
        We the <br />
        Navigators
      </a>
      <div className="nation-block grid">
        <span className="nation">대한민국</span>
        <span>11:19:00</span>
      </div>
    </div>
  );
}
