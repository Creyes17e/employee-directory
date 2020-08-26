import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Container from "../src/components/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container />
    </Router>
  );
}

export default App;
