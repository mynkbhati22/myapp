import React, { useState } from "react";

function Revision() {
  const [color, setColor] = useState("red");
  const [registration, setRegistration] = useState({
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);

  const Changecolor = () => {
    setColor("blue");
    console.log(color);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...registration, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    setRegistration({ email: "", password: " " });
  };

  return (
    <div>
      <h1> My fav color is {color}!</h1>
      {/* <button onClick={()=>setColor("blue")}>Change Color</button> */}
      <button onClick={() => Changecolor()}>Change Color</button>

      {/* FORM REVISION */}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={registration.email}
            onChange={handleInput}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={registration.password}
            onChange={handleInput}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Revision;
