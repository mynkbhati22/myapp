import React, { useState } from "react";

export default function SetState() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="container">
        <div className="state-container">
          <button className="p-3 mx-3" onClick={() => Decrement()}>
            -
          </button>
          <span className={count <=0 ?"color-count" :"text-success fs-2"} id={ count===0 ?"count-number" : ""} >{count}</span>
          <button className="p-3 mx-3" onClick={() => Increment()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
