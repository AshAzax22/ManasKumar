import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CursorTrail from "./components/CursorTrail";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <CursorTrail />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
