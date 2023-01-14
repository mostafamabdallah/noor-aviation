import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import "../style.css";
import Animation from "./Animation";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Animation></Animation>
    </BrowserRouter>
  );
};

export default App;
