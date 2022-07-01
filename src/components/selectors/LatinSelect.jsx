import '../../styles/selectors/LatinSelect.css'
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
const SelectorL = () => {
  const navigate = useNavigate();
  const handleLatinI = useCallback(() => navigate('/latini', {replace: true}, [navigate]));
  const handleLatinII = useCallback(() => navigate('/latinii', {replace: true}, [navigate]));
  const handleLatinIII = useCallback(() => navigate('/latiniii', {replace: true}, [navigate]));
  const handleLatinIV = useCallback(() => navigate('/latiniv', {replace: true}, [navigate]));
  return (
    <div id = "selector">
      <ul id = "levels">
        <motion.li custom = {1} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleLatinI}>Latin Unus</button></motion.li>
        <motion.li custom = {2} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleLatinII}>Latin Duo</button></motion.li>
        <motion.li custom = {3} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleLatinIII}>Latin Tres</button></motion.li>
        <motion.li custom = {4} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleLatinIV}>Latin Quattuor</button></motion.li>
      </ul>
    </div>
  );
}
const PadderL = () => {
  return (
    <div id = "padderL"></div>
  );
}
export default function LatinSelect() {
  const [isToggledL, setIsToggledL] = useState(false);

  const DisplayedL = () => {
    return (
      <div id = "flag">
        <div><button><motion.img whileTap = {{scale: 0.95}} id = "img" src = {require("../../images/latin.png")} alt = "Latin Flag" onClick = {() => setIsToggledL(!isToggledL)}/></button></div>
        <SelectorL />
      </div>
    )
  }
  const HiddenL = () => {
    return (
      <div id = "flag">
        <div><button><motion.img whileTap = {{scale: 0.95}} id = "img" src = {require("../../images/latin.png")} alt = "Latin Flag" onClick = {() => setIsToggledL(!isToggledL)}/></button></div>
        <PadderL />
      </div>
    )
  }
    return (
      <>
        { isToggledL ? <DisplayedL /> : <HiddenL /> }
      </>
    );
  }