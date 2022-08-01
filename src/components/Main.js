import React from "react";

export default function Main() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="main-container">
              <h1>
                Leading{" "}
                <span className="text-primary">
                  Blockchain <br /> Development
                </span>{" "}
                Services
              </h1>
              <p>
                One-stop solution for all your blockchain development needs.
                Smart contracts (ERC-20/ERC-721), DAPPs, ICO/IDOs, Launchpads,
                and more. Customised Solutions for every need.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-image">
              <img
                src="https://kesaviwebsolutions.com/static/media/defidev.efb2508ca579496586f4.jpeg"
                alt=""
                className="img w-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
