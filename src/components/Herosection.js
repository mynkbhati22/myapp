import React from "react";
import About from "./About";

export default function Herosection() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1>Who are we ?</h1>
            <p>
              EmpowerWIT is a social movement aimed to empower women/housewives
              by training them in the field of Information Technology and equip
              them with skills to earn economic freedom while being around their
              family
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image-container">
              <img
                src="https://empowerwit.netlify.app/static/media/img3.bb3d2ffd4a2fe22b0a0e.png"
                alt=""
                className="ewit-img"
              />
            </div>
          </div>
        </div>
        <div id="about">
          <About />
        </div>
      </div>
    </div>
  );
}
