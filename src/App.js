import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./conponents/Header";
import Home from "./conponents/Home";
import Detail from "./conponents/Detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="detail" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
