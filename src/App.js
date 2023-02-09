import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Revision from "./components/Revision";
import SetState from "./components/SetState";
import State from "./components/State";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Home from "./components/pages/Home";
import Testpage from "./components/pages/Testpage";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/testing" element={<Testpage />} />
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
