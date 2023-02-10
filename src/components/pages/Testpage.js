import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);

export default function Testpage({ url }) {
  const [fields, setFields] = useState([0]);
  const [addingField, setAddingField] = useState([{}]);
  const [tourdetails, setTourdetailss] = useState([]);
  const [accordianheading, setAccordianHeading] = useState();
  const [slug, setSlug] = useState();
  const [packageimage, setPackageImage] = useState();
  const [packagetype, setPackageType] = useState();

  const { locationame } = useParams();
  console.log("locationame is :", locationame);

  const AddingDtaViaName = async () => {
    const arrtribute = [];
    console.log(addingField);
    for (let i = 0; i < addingField.length; i++) {
      if (addingField[i].type && addingField[i].value) {
        setTourdetailss((tourdetails) => [...tourdetails, addingField[i]]);
        arrtribute.push(addingField[i]);
      }
    }

    try {
      await axios
        .post(`${url}/api/addingPackagesinLocation`, {
          locationame: locationame,
          slug: slug,
          packageimage: packageimage,
          accordianheading: accordianheading,
          packagetype: packagetype,
          packagedetails: arrtribute,
        })
        .then((res) => {
          console.log("addedpackagedetails", res.data);
        });
      notify("Added!!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateFieldChangedType = (index, e) => {
    // console.log('index: ' + index);
    // console.log('property name: '+ e.target.name);
    let newArr = [...addingField];
    newArr[index].type = e.target.value;
    setAddingField(newArr);
  };

  const updateFieldChangedValue = (index, e) => {
    // console.log('index: ' + index);
    // console.log('property name: '+ e.target.name);
    let newArr = [...addingField];
    newArr[index].value = e.target.value;
    setAddingField(newArr);
  };

  return (
    <div className="container">
      TESTING INPUT FIELDS <br />
      <div>
        <input
          type="text "
          placeholder="enter nameofthelocation.."
          className="my-4"
          value={locationame}
        />
      </div>
      <div>
        <input
          type="text "
          placeholder="enter slug.."
          className="my-4"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text "
          placeholder="enter packageimage.."
          className="my-4"
          value={packageimage}
          onChange={(e) => setPackageImage(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text "
          placeholder="enter packagetype.."
          className="my-4"
          value={packagetype}
          onChange={(e) => setPackageType(e.target.value)}
        />
      </div>
      <div className="row m-y-1">
        <div className="col">
          <div className="f-w-600">Heading</div>
        </div>
        <div className="col">
          {" "}
          <div className="f-w-600">Description</div>
        </div>
      </div>
      {fields.map((res, index) => {
        return (
          <>
            <div className="row m-y-1">
              <div className="col">
                <div className="">
                  <input
                    type="text"
                    placeholder="Character"
                    className="w-100 b-r-5 pa-0_5"
                    value={addingField[fields.indexOf(res)].type}
                    onChange={(e) => {
                      updateFieldChangedType(fields.indexOf(res), e);
                    }}
                  />
                </div>
              </div>
              <div className="col">
                {" "}
                <div className="">
                  <input
                    type="text"
                    placeholder="Male"
                    className="w-100 b-r-5 pa-0_5"
                    value={addingField[fields.indexOf(res)].value}
                    onChange={(e) => {
                      updateFieldChangedValue(fields.indexOf(res), e);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
      <button
        onClick={() => {
          setAddingField((addingField) => [...addingField, {}]);
          setFields((fields) => [...fields, fields.length]);
        }}
      >
        Add More
      </button>{" "}
      <br />
      <button onClick={() => AddingDtaViaName()} className="my-5">
        Submit
      </button>
      <Toaster />
    </div>
  );
}
