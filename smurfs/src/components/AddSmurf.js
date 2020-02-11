import React, { useState } from "react";
import axios from "axios";

const AddSmurf = () => {
  const [addSmurf, setAddSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = event => {
    setAddSmurf({ ...addSmurf, [event.target.name]: event.target.value });
  };

  const addSmurfForm = () => {
    axios
      .post("http://localhost:3333/smurfs", addSmurf)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addSmurfForm();
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Smurf Name"
        value={addSmurf.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age"
        placeholder="Smurf Age"
        value={addSmurf.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="height"
        placeholder="Smurf Height"
        value={addSmurf.height}
        onChange={handleChanges}
      />
      <button onClick={handleSubmit}>Add Smurf</button>
    </form>
  );
};

export default AddSmurf;
