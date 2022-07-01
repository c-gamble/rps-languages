import '../styles/Home.css';
import '../styles/Navbar.css';
import React from "react";

import FrenchSelect from './selectors/FrenchSelect';
import GermanSelect from './selectors/GermanSelect';
import LatinSelect from './selectors/LatinSelect';


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

        <div id = "flags-cont">
            <div id = "flags">
              <FrenchSelect />
              <GermanSelect />
              <LatinSelect />
            </div>
        </div>
      </>
    );
}
