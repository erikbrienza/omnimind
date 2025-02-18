import React, { useState, useEffect } from "react";
import "../index.css";
import backgroundMusic from "../assets/meditation-music.mp3";

function Meditation() {
  const [time, setTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [audio] = useState(new Audio(backgroundMusic));

  useEffect(() => {
    if (!isRunning) return;
    audio.play();
    audio.loop = true;
    
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isRunning, audio]);

  return (
    <div className="container">
      <h1>Sessione di Meditazione</h1>
      <p className="timer">{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</p>
      <div className="button-container">
        <button className="button" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pausa" : "Inizia"}
        </button>
        <button className="button" onClick={() => { setTime(300); setIsRunning(false); }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Meditation;