import React, { useState, useEffect, useRef } from "react";
import meditationMusic from "../assets/meditation-music.mp3"; // Importa la musica

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const audioRef = useRef(new Audio(meditationMusic)); // Crea un riferimento all'audio

  useEffect(() => {
    if (timeLeft === 0) {
      audioRef.current.pause(); // Ferma la musica quando finisce il timer
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    audioRef.current.play(); // Avvia la musica quando parte il timer
    audioRef.current.loop = true; // Riproduzione in loop
    audioRef.current.volume = 0.5; // Volume non troppo alto

    return () => {
      audioRef.current.pause(); // Ferma la musica quando il componente viene smontato
      audioRef.current.currentTime = 0;
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer">
      <h1>Tempo Rimasto</h1>
      <p>{formatTime(timeLeft)}</p>
      {timeLeft === 0 && <p className="finish-message">Meditazione completata!</p>}
    </div>
  );
};

export default Timer;