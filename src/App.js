import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Characters from './Component/Characters';
// import React, { useState } from "react";
// import Axios from "axios";

const App = () => {

// const url ='https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters';



  return (
    <>
     <Navbar />
     <Home />
     <Characters />
   </>
  );
}


export default App;
