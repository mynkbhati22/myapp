import React, { useState } from "react";

export default function Testpage() {
  const [fields, setFields] = useState([0]);
  const [addingField, setAddingField] = useState([{}]);

  const arrtribute = [];
  console.log(addingField);
  for (let i = 0; i < addingField.length; i++) {
    if (addingField[i].type && addingField[i].value) {
      setAddingField((attributes) => [...attributes, addingField[i]]);
      arrtribute.push(addingField[i]);
    }
  }

  const updateFieldChangedType = (index, e) => {
    // console.log('index: ' + index);
    // console.log('property name: '+ e.target.name);
    let newArr = [...addingField];
    newArr[index].type = e.target.value;
    setAddingField(newArr);
  };

  return (
    <div className="container">
      TESTING INPUT FIELDS <br />
      {fields.map((res) => {
        return (
          <>
            <input
              type="text "
              placeholder="enter something.."
              className="my-4"
              value={addingField[fields.indexOf(res)].type}
              onChange={(e) => {
                updateFieldChangedType(fields.indexOf(res), e);
              }}
            />
            <br />
          </>
        );
      })}
      <br />
      <button
        onClick={() => {
          setAddingField((addingField) => [...addingField, {}]);
          setFields((fields) => [...fields, fields.length]);
        }}
      >
        Add More
      </button>
    </div>
  );
}
