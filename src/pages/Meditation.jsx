import React, { useState } from "react";
import Timer from "../components/Timer";

const Meditation = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="meditation">
      {selectedTime ? (
        <Timer duration={selectedTime} />
      ) : (
        <>
          <h1>Seleziona la durata della meditazione</h1>
          <div className="button-container">
            <button onClick={() => setSelectedTime(1)} className="button">1 Minuto</button>
            <button onClick={() => setSelectedTime(5)} className="button">5 Minuti</button>
            <button onClick={() => setSelectedTime(10)} className="button">10 Minuti</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Meditation;