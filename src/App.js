import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          about="about"
          mode={mode}
          toggleMode={toggleMode}
        />
         <Navbar
          title="Textutils"
          about="about"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container">
          <Routes>
            <Route path="/about" element={ <About />}/>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />}/>
          </Routes>
        </div>
        <div>
          het
        </div>
     
       
      </Router>
    </>
  );
}

export default App;
