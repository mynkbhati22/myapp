import React from "react";
import About from "../About";
import Herosection from "../Herosection";
import Main from "../Main";

export default function Home() {
  return (
    <div>
      {" "}
      <Herosection />
      <About />
      <Main />
    </div>
  );
}
