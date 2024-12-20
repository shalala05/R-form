import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div>
      <h1>Saniyəölçən: {time} saniyə</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Dayandır' : 'Başlat'}
      </button>
    </div>
  );
};

export default Stopwatch;
