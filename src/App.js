import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SearchForm from "../src/components/SearchForm";
import Search from "../src/components/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchForm />
      <Search />
    </Router>
  );
}

export default App;
