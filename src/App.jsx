import { Route ,Routes } from 'react-router-dom';
import React from "react"; 
import Home from "./pages/Home"; 
import Projects from "./pages/Projects"; 
import Agence from "./pages/Agence"; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/projects" element={<Projects />}></Route> 
        <Route path="/agence" element={<Agence />}></Route> 

      </Routes>
    </div>
  )
};

export default App;
