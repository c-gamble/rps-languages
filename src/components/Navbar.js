import '../styles/Navbar.css';
import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const handleHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const handleLanguages = useCallback(() => navigate('/languages', {replace: true}), [navigate]);
  const handleContribute = useCallback(() => navigate('/contribute', {replace: true}), [navigate]);
  const handleAbout = useCallback(() => navigate('/about', {replace: true}), [navigate]);
  const handleContact = useCallback(() => navigate('/contact', {replace: true}), [navigate]);

    return (
        <div id = "navbar">
          <div id = "fifth"><button onClick = {handleHome}>Home</button></div>
          <div id = "fifth"><button onClick = {handleLanguages}>Languages</button></div>
          <div id = "fifth"><button onClick = {handleContribute}>Contribute</button></div>
          <div id = "fifth"><button onClick = {handleAbout}>About</button></div>
          <div id = "fifth"><button onClick = {handleContact}>Contact</button></div>
        </div>
    );
}
