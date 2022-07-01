import '../../styles/selectors/FrenchSelect.css'
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
const SelectorF = () => {
  const navigate = useNavigate();
  const handleFrenchI = useCallback(() => navigate('/frenchi', {replace: true}, [navigate]));
  const handleFrenchII = useCallback(() => navigate('/frenchii', {replace: true}, [navigate]));
  const handleFrenchIII = useCallback(() => navigate('/frenchiii', {replace: true}, [navigate]));
  const handleFrenchIV = useCallback(() => navigate('/frenchiv', {replace: true}, [navigate]));
  return (
    <div id = "selector">
      <ul id = "levels">
        <motion.li custom = {1} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleFrenchI}>Français Un</button></motion.li>
        <motion.li custom = {2} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleFrenchII}>Français Deux</button></motion.li>
        <motion.li custom = {3} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleFrenchIII}>Français Trois</button></motion.li>
        <motion.li custom = {4} initial = "hidden" animate = "visible" variants = {listItem} id = "level"><button onClick = {handleFrenchIV}>Français Quarte</button></motion.li>
      </ul>
    </div>
  );
}
const PadderF = () => {
  return (
    <div id = "padderF"></div>
  );
}
export default function FrenchSelect() {
  const [isToggledF, setIsToggledF] = useState(false);

  const DisplayedF = () => {
    return (
      <div id = "flag">
        <div><button><img draggable = {false} id = "img" src = {require("../../images/french.png")} alt = "French Flag" onClick = {() => setIsToggledF(!isToggledF)}/></button></div>
        <SelectorF />
      </div>
    )
  }
  const HiddenF = () => {
    return (
      <div id = "flag">
        <div><button><img draggable = {false} id = "img" src = {require("../../images/french.png")} alt = "French Flag" onClick = {() => setIsToggledF(!isToggledF)}/></button></div>
        <PadderF />
      </div>
    )
  }
    return (
      <>
        { isToggledF ? <DisplayedF /> : <HiddenF /> }
      </>
    );
  }