import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div className="container">
      <h1>Benvenuto su OmniMind</h1>
      <p>Trova la tua pace interiore con le nostre sessioni guidate.</p>
      <Link to="/meditation" className="button">Inizia la sessione</Link>
    </div>
  );
}

export default Home;