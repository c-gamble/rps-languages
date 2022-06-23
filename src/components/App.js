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
import French from './languages/French';
import German from './languages/German';
import Latin from './languages/Latin';

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  })
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/languages" element = {<Languages />}>
              <Route path = "/languages/french" element = {<French />} />
              <Route path = "/languages/german" element = {<German />} />
              <Route path = "/languages/latin" element = {<Latin />} />
          </Route>
          <Route path = "/contribute" element = {<Contribute />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
