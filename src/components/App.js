import '../styles/App.css';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { React, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Desc from "./Desc";
import Home from "./Home";
function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  })
  return (
      <Router>
        <body>
          <Navbar />
          <Header />
          <Desc />
          <div id = "padder"></div>
          <Home />
        </body>
      </Router>
  );
}

export default App;
