import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      if (isRunning) {
        alert("Vaxt bitdi!");
        setIsRunning(false);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div>
      <h1>Taymer: {time} saniyə</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pauza' : 'Başlat'}
      </button>
      <button onClick={() => setTime(time + 1)}>Vaxtı artır</button>
      <button onClick={() => setTime(time - 1)}>Vaxtı azaldın</button>
    </div>
  );
};

export default Timer;
