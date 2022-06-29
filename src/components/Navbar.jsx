import '../styles/Navbar.css';
import React, { useCallback } from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
export default function Navbar() {

    return (
      <div id = "navbar">
        <ul id = "page-select">
          <li id = "link-cont"><NavLink id = "link" to = "/" style={({isActive})=>({color: isActive ? '#9BC1BC':'#6E6A6F'})}>Home</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/contribute" style={({isActive})=>({color: isActive ? '#9BC1BC':'#6E6A6F'})}>Contribute</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/about" style={({isActive})=>({color: isActive ? '#9BC1BC':'#6E6A6F'})}>About</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/contact" style={({isActive})=>({color: isActive ? '#9BC1BC':'#6E6A6F'})}>Contact</NavLink></li>
        </ul>    
      </div>
    );
}
