import React, { useState } from "react";

export default function State() {
  const [newValue, setNewValue] = useState({
    name: "state",
  });
  const [number, setNumber] = useState({
    name: "1",
    value: "today",
  });
  //   const UpdateColor = () => {
  //     setNewValue((previousState) => {
  //       return { ...previousState, name: "something new" };
  //     });
  const Change = () => {
    setNumber((previousNumber) => {
      return { ...previousNumber, name: "2", value: "3" };
    });
  };

  return (
    <div className="container mt-5">
      {/* <h1>
        We are learning <span className="text-danger">{newValue.name}</span>{" "}
        today
      </h1> */}
      <h1>
        We are learning <span className="text-danger">{number.name}</span>{" "}
        <br />
        {number.value}
      </h1>
      <p
        onClick={() => Change()}
        className="fs-1"
        style={{ cursor: "pointer" }}
      >
        1
      </p>
      {/* <button onClick={() => UpdateColor()}>Onclick</button> */}
    </div>
  );
}
// }
