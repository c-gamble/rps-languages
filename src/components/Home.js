import '../styles/Home.css'
import '../styles/Navbar.css';
import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  //french
  const handleFrenchI = useCallback(() => navigate('/frenchi', {replace: true}, [navigate]));
  const handleFrenchII = useCallback(() => navigate('/frenchii', {replace: true}, [navigate]));
  const handleFrenchIII = useCallback(() => navigate('/frenchiii', {replace: true}, [navigate]));
  const handleFrenchIV = useCallback(() => navigate('/frenchiv', {replace: true}, [navigate]));
  //german
  const handleGermanI = useCallback(() => navigate('/germani', {replace: true}, [navigate]));
  const handleGermanII = useCallback(() => navigate('/germanii', {replace: true}, [navigate]));
  const handleGermanIII = useCallback(() => navigate('/germaniii', {replace: true}, [navigate]));
  const handleGermanIV = useCallback(() => navigate('/germaniv', {replace: true}, [navigate]));
  //latin
  const handleLatinI = useCallback(() => navigate('latini', {replace: true}, [navigate]));
  const handleLatinII = useCallback(() => navigate('latinii', {replace: true}, [navigate]));
  const handleLatinIII = useCallback(() => navigate('latiniii', {replace: true}, [navigate]));
  const handleLatinIV = useCallback(() => navigate('latiniv', {replace: true}, [navigate]));
    return (
      <>
        <div id = "header">
          <div id = "t1">
            <div id = "h-content">
              THE
            </div>
          </div>
          <div id = "t2">        
            <div id = "h-content">
              LANG
            </div>
          </div>
          <div id = "t3">
            <div id = "h-content">
              GANG
            </div>
          </div>
        </div>

        <div id = "content">
          <div id = "flags-cont">
            <div id = "flags">
              <div id = "flag"><div><img src = {require("../images/french.png")} alt = "French Flag"/></div><div><span id = "span">&nbsp;Français</span></div></div>
              <div id = "flag"><div><img src = {require("../images/german.png")} alt = "German Flag"/></div><div><span id = "span">&nbsp;Deutsch</span></div></div>
              <div id = "flag"><div><img src = {require("../images/latin.png")} alt = "Latin Flag"/></div><div><span id = "span">&nbsp;Latin</span></div></div>
            </div>
          </div>

          <div id = "selectors">
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {handleFrenchI}>Français Un</button></li>
                <li id = "level"><button onClick = {handleFrenchII}>Français Deux</button></li>
                <li id = "level"><button onClick = {handleFrenchIII}>Français Trois</button></li>
                <li id = "level"><button onClick = {handleFrenchIV}>Français Quarte</button></li>
              </ul>
            </div>
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {handleGermanI}>Deutsch Ein</button></li>
                <li id = "level"><button onClick = {handleGermanII}>Deutsch Zwei</button></li>
                <li id = "level"><button onClick = {handleGermanIII}>Deutsch Drei</button></li>
                <li id = "level"><button onClick = {handleGermanIV}>Deutsch Vier</button></li>
              </ul>
            </div>
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {handleLatinI}>Latin Unus</button></li>
                <li id = "level"><button onClick = {handleLatinII}>Latin Duo</button></li>
                <li id = "level"><button onClick = {handleLatinIII}>Latin Tres</button></li>
                <li id = "level"><button onClick = {handleLatinIV}>Latin Quattuor</button></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
