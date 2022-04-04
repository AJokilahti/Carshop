import React from "react";
import "./App.css";
import Traininglist from "./components/Traininglist.js";
import Customerlist from "./components/Customerlist.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Welcome to Personal Trainer</h1>
      <BrowserRouter>
      <Link to="/">Training</Link>
      {"  "}
      <Link to="/customer">Customers</Link>
      {"  "}
      
        <Routes>
          <Route path="/" element={<Traininglist />} />
          <Route path="/customer" element={<Customerlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
