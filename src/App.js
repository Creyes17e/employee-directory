import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SearchForm from "../src/components/SearchForm";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchForm />
    </Router>
  );
}

export default App;
