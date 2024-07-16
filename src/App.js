import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./assets/styles/App.css";
import SearchHeader from "./components/SearchHeader";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  return (
    <Router>
      <Header />
      <SearchHeader query={query} setQuery={setQuery} setData={setData} />
      <Routes>
        <Route path="/" element={<Home query={query} data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
