import React from "react";
import "./Main.scss";
import MainTitle from "./MainTitle";
import ThumbBox from "./ThumbBox";

export default function Main() {
  return (
    <main>
      <MainTitle />
      <div className="grid column">
        <ThumbBox />
      </div>
    </main>
  );
}
