import React from "react";
import { useState} from "react";
import GameUI from "./scripts/GameUI";
import StartGame from "./scripts/StartGame";


function App() {

  const [currentPage , setPage] = useState("StartGame")
  return (
    <>{currentPage === "StartGame" ? <StartGame onClick={()=>setPage("GameUI")}/>:<GameUI />}
      
    </>
  );
}


export default App;
