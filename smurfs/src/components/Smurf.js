import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>Name: {props.smurf.name}</h1>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
