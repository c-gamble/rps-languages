import '../styles/Home.css'
import { React } from "react"

export default function Home() {
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
              <div id = "flag"><div><img src = {require("../images/french.png")} alt = "French Flag"/></div><div>French /<span id = "span">&nbsp;Français</span></div></div>
              <div id = "flag"><div><img src = {require("../images/german.png")} alt = "German Flag"/></div><div>German /<span id = "span">&nbsp;Deutsch</span></div></div>
              <div id = "flag"><div><img src = {require("../images/latin.png")} alt = "Latin Flag"/></div><div>Latin /<span id = "span">&nbsp;Latin</span></div></div>
            </div>
          </div>

          <div id = "selectors">
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {null}>French I</button></li>
                <li id = "level"><button onClick = {null}>French II</button></li>
                <li id = "level"><button onClick = {null}>French III</button></li>
                <li id = "level"><button onClick = {null}>French IV</button></li>
              </ul>
            </div>
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {null}>German I</button></li>
                <li id = "level"><button onClick = {null}>German II</button></li>
                <li id = "level"><button onClick = {null}>German III</button></li>
                <li id = "level"><button onClick = {null}>German IV</button></li>
              </ul>
            </div>
            <div id = "selector">
              <ul id = "levels">
                <li id = "level"><button onClick = {null}>Latin I</button></li>
                <li id = "level"><button onClick = {null}>Latin II</button></li>
                <li id = "level"><button onClick = {null}>Latin III</button></li>
                <li id = "level"><button onClick = {null}>Latin IV</button></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
