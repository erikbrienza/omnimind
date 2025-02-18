import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import Info from "./pages/Info";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;