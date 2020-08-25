import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SearchForm from "../src/components/SearchForm";
import SearchResults from "../src/components/SearchResults";
// import Search from "../src/components/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchForm />
      <SearchResults />
    </Router>
  );
}

export default App;
