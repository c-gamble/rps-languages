import '../styles/Navbar.css';
import React from "react";
import { NavLink } from 'react-router-dom';
export default function Navbar() {

    return (
      <div id = "navbar">
        <ul id = "page-select">
          <li id = "link-cont"><NavLink id = "link" to = "/" style={({isActive})=>({color: isActive ? 'red':'#6E6A6F', fontSize: isActive ? '20px':'18px'})}>Home</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/contribute" style={({isActive})=>({color: isActive ? 'red':'#6E6A6F', fontSize: isActive ? '20px':'18px'})}>Contribute</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/about" style={({isActive})=>({color: isActive ? 'red':'#6E6A6F', fontSize: isActive ? '20px':'18px'})}>About</NavLink></li>
          <li id = "link-cont"><NavLink id = "link" to = "/contact" style={({isActive})=>({color: isActive ? 'red':'#6E6A6F', fontSize: isActive ? '20px':'18px'})}>Contact</NavLink></li>
        </ul>    
      </div>
    );
}
