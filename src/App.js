import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Testpage from "./components/pages/Testpage";

export default function App() {
  let url = window.URL;
  url = "https://bkhnak.deta.dev";
  console.log("gettingapiurl", url);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home url={url} />} />
          <Route
            path="/testing/:locationame"
            element={<Testpage url={url} />}
          />
        </Routes>
        {/* <Features />
        <Main />
        <State />
        <SetState />
        <RegistrationForm /> */}
        {/* <Revision /> */}
        {/* <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </div>
  );
}
