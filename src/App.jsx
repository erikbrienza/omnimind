import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Meditation from "./pages/Meditation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </div>
  );
}

export default App;