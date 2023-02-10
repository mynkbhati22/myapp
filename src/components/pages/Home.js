import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Main from "../Main";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);

export default function Home({ url }) {
  const [locationame, setLocationName] = useState();
  const [packageData, setPackageData] = useState([]);

  const CreateAnLocation = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${url}/api/addlocations`, {
          locationame: locationame,
        })
        .then((res) => {
          console.log("added Location Name", res.data);
        });
      notify("Added Location Name");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      axios.get(`${url}/api/getlocations`).then((res) => {
        console.log(res.data);
        setPackageData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        {" "}
        {/* <Herosection />
      <About /> */}
        <Main />
      </div>
      <div className="container">
        <form onSubmit={CreateAnLocation}>
          <div>
            <input
              type="text "
              placeholder="Create Location Name"
              className="my-4"
              required
              value={locationame}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <button type="submit">Create Location Name</button>
        </form>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Update</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {packageData &&
              packageData.map((res, index) => {
                return (
                  <tr key={index}>
                    <th colSpan="row">{packageData.indexOf(res) + 1}</th>
                    <td>{res.locationame}</td>
                    <td>
                      {" "}
                      <Link to={`/testing/${res.locationame}`}>
                        ADD Website content
                      </Link>
                    </td>
                    <td>
                      <Link to="/">Delete</Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Toaster />
    </>
  );
}
