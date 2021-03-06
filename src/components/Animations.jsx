import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*components*/
import Home from "./Home";
import Contribute from "./Contribute";
import About from "./About";
import Contact from "./Contact";
/*french*/
import FrenchI from './languages/french/FrenchI';
import FrenchII from './languages/french/FrenchII';
import FrenchIII from './languages/french/FrenchIII';
import FrenchIV from './languages/french/FrenchIV';
/*german*/
import GermanI from './languages/german/GermanI';
import GermanII from './languages/german/GermanII';
import GermanIII from './languages/german/GermanIII';
import GermanIV from './languages/german/GermanIV';
/*latin*/
import LatinI from './languages/latin/LatinI';
import LatinII from './languages/latin/LatinII';
import LatinIII from './languages/latin/LatinIII';
import LatinIV from './languages/latin/LatinIV';


export default function Animations() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location = {location} key = {location.pathname}>
                <Route path = "/" element = {<Home />}/>
                {/*french*/}
                <Route path = "/frenchi" element = {<FrenchI />} />
                <Route path = "/frenchii" element = {<FrenchII />} />
                <Route path = "/frenchiii" element = {<FrenchIII />} />
                <Route path = "/frenchiv" element = {<FrenchIV />} />
                {/*german*/}
                <Route path = "/germani" element = {<GermanI />} />
                <Route path = "/germanii" element = {<GermanII />} />
                <Route path = "/germaniii" element = {<GermanIII />} />
                <Route path = "/germaniv" element = {<GermanIV />} />
                {/*latin*/}
                <Route path = "/latini" element = {<LatinI />} />
                <Route path = "/latinii" element = {<LatinII />} />
                <Route path = "/latiniii" element = {<LatinIII />} />
                <Route path = "/latiniv" element = {<LatinIV />} />
                <Route path = "/contribute" element = {<Contribute />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/contact" element = {<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}
