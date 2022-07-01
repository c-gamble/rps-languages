import '../styles/App.css';
import 'typeface-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { React, useEffect } from "react";
import Navbar from "./Navbar";
import Animations from './Animations';

export default function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }); 
  return (
    <Router>
      <Navbar />
      <Animations />
    </Router>
  );
 
 
}