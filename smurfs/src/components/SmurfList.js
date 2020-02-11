import React, { useContext } from "react";
import SmurfContext  from "../contexts/SmurfContext";
import Smurf from "../components/Smurf";

const SmurfList = () => {
  const { smurf } = useContext(SmurfContext);

  return (
    <div>
      {smurf && smurf.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)}
    </div>
  );
};

export default SmurfList;
