import React, { useState } from "react";
import Navbar from "./GovernanceComponents/Navbar/Navbar";
import Hero from "./GovernanceComponents/Hero/Hero";
import Footer from "./GovernanceComponents/Footer/Footer";

const Governance = (() =>{
  return <>
    <Navbar />
    <div className="absolute top-48">
      <Hero />
      <Footer />
    </div>
  </>
} 

);

export default Governance;
