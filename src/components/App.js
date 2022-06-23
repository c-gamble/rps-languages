import '../styles/App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { React, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Languages from "./Languages";
import Contribute from "./Contribute";
import About from "./About";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  })
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/languages" element = {<Languages />} />
          <Route path = "/contribute" element = {<Contribute />} />
          <Route path = "/About" element = {<About />} />
          <Route path = "/Contact" element = {<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
