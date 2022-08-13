import React, { useState } from "react";

export default function RegistrationForm() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setRegister({ ...register, [name]: value }); //... is used to display previous data also .
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //helps to not reload the page
    const newRecord = { ...register, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);

    setRegister({ name: "", email: "", password: "", address: "", city: "" });
  };

  return (
    <div>
      <div className="container">
        <h1>Registration Form</h1>
        <form className="row g-3" action="" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="name"
              autoComplete="off"
              name="name"
              value={register.name}
              onChange={handleInput}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              autoComplete="off"
              name="email"
              value={register.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              autoComplete="off"
              name="password"
              value={register.password}
              onChange={handleInput}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              autoComplete="off"
              value={register.address}
              onChange={handleInput}
              required
            />
          </div>
          {/* <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div> */}
          <div className="col-md-12">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              autoComplete="off"
              name="city"
              value={register.city}
              onChange={handleInput}
            />
          </div>
          {/* <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div> */}
          {/* <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div> */}
          {/* <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
        <div>
          {records.map((currElem) => {
            const {name,id, email,address, password, city} = currElem
            return (
              <div className="d-flex align-items-center border border-1 p-3 justify-content-between" key={currElem}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{id}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
