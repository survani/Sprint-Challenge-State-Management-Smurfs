import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

import Smurf from "../components/App";

const SmurfList = () => {
  const smurf = useContext(SmurfContext);

  return (
    <div>
        {/* <p>{smurf.name}</p> */}
      {/* {smurf.map(smurf => (
        <Smurf 
        key={smurf.id} 
        smurf={smurf}
        
        />
      ))} */}
    </div>
  );
};

export default SmurfList;
