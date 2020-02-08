import React, { useState} from "react";
import "./App.css";
import axios from "axios";
// import { Route } from "react-router-dom";

//Components
import SmurfList from "../components/SmurfList";

//Context Imports
import {SmurfContext} from "../contexts/SmurfContext";

const App = () => {
  const [smurf] = useState();

  axios
  .get("http://localhost:3333/smurfs")
  .then( res=>{
    console.log("response for smurfs",res.data)
  }
  )
  .catch(error => console.log(error))

    return (
      <div className="App">
        <SmurfContext.Provider value={smurf}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div> */}
        <div>Have fun!</div>
        <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
