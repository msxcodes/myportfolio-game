import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import './styles/app.css'
import Background from "./components/Background";
import MyInfo from "./components/MyInfo";


const App = () => {
  return (
    <Router>
      <Background/>
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <MyInfo/>
    </Router>
  );
}

export default App;
