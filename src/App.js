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

export default function App() {
  return (
    <div>
   <Router>
   <Navbar />
   <Features />
      {/* <Main />
      <State />
      <SetState />
      <RegistrationForm/> */}
      {/* <Revision/> */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </Router>
    </div>
  );
}
