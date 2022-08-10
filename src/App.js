import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import SetState from "./components/SetState";
import State from "./components/State";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Main />
      <State />
      <SetState /> */}
      <RegistrationForm/>
    </div>
  );
}
