import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Governance from './Components/Governance'
import Proposal from "./Components/Proposal";
import { Route, Routes } from "react-router-dom";
function App() {
   
  return (
    <>
    <Routes>
      <Route exact path={"/governance"} element={<Governance />} />
      <Route exact path={"/governance/proposal/:id"} element={<Proposal />} />
    </Routes>
    
    </>
  );
}

export default App;
