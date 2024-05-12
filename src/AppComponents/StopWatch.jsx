import React, { useEffect, useState } from 'react';
import "../App.css"
const StopWatch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const week = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  const date = currentTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = currentTime.toLocaleTimeString();

  return (
    <div className='date-container'>
    
      <p> {week}</p>
      <p> {date}</p>
      <p>{time}</p>
    </div>
  );
};

export default StopWatch;
