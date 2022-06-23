import '../styles/Home.css'
import { React } from "react"

const Home = () => {
    return (
        <div id = "content">
          <div id = "flags-cont">
            <div id = "flags">
              <div id = "flag"><div><img src = {require("../images/french.png")} alt = "French Flag"/></div>French / Français</div>
              <div id = "flag"><div><img src = {require("../images/german.png")} alt = "German Flag"/></div>German / Deutsch</div>
              <div id = "flag"><div><img src = {require("../images/latin.png")} alt = "Latin Flag"/></div>Latin / Latin</div>
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
    );
}

export default Home;