import '../../styles/selectors/GermanSelect.css'
import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const listItem = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i*0.05
    }
  }),
  hidden: {opacity: 0}
}
const SelectorG = () => {
  const navigate = useNavigate();
  const handleGermanI = useCallback(() => navigate('/germani', {replace: true}, [navigate]));
  const handleGermanII = useCallback(() => navigate('/germanii', {replace: true}, [navigate]));
  const handleGermanIII = useCallback(() => navigate('/germaniii', {replace: true}, [navigate]));
  const handleGermanIV = useCallback(() => navigate('/germaniv', {replace: true}, [navigate]));
  return (
    <div id = "selector">
      <ul id = "levels">
        <motion.li custom = {1} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleGermanI}>Deutsch Ein</button></motion.li>
        <motion.li custom = {2} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleGermanII}>Deutsch Zwei</button></motion.li>
        <motion.li custom = {3} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleGermanIII}>Deutsch Drei</button></motion.li>
        <motion.li custom = {4} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleGermanIV}>Deutsch Vier</button></motion.li>
      </ul>
    </div>
  );
}
const PadderG = () => {
  return (
    <div id = "padderG"></div>
  );
}
export default function GermanSelect() {
  const [isToggledG, setIsToggledG] = useState(false);

  const DisplayedG = () => {
    return (
      <div id = "flag">
        <div><button><motion.img whileTap = {{scale: 0.95}} id = "img" src = {require("../../images/german.png")} alt = "German Flag" onClick = {() => setIsToggledG(!isToggledG)}/></button></div>
        <SelectorG />
      </div>
    )
  }
  const HiddenG = () => {
    return (
      <div id = "flag">
        <div><button><motion.img whileTap = {{scale: 0.95}} id = "img" src = {require("../../images/german.png")} alt = "German Flag" onClick = {() => setIsToggledG(!isToggledG)}/></button></div>
        <PadderG />
      </div>
    )
  }
    return (
      <>
        { isToggledG ? <DisplayedG /> : <HiddenG /> }
      </>
    );
  }