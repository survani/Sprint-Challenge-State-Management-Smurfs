import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

//Components
import SmurfList from "./SmurfList";

//Context Imports
import SmurfContext from "../contexts/SmurfContext";
import AddSmurf from "./AddSmurf";

const App = () => {
  const [smurf, setSmurf] = useState();

  //starts as undefined
  console.log("smurf state: app.js", smurf);

  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")
    .then( res=>{
      //shows data correctly
      console.log("response for smurfs",res.data)
      setSmurf(res.data)
    })
    //error displaying correct when needed. 
    .catch(error => console.log(error));
  }, []);


    return (
      <div className="App">
        <SmurfContext.Provider value={{smurf, setSmurf}}>
        <h1>Smurf Village</h1>
        <AddSmurf/>
        <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
