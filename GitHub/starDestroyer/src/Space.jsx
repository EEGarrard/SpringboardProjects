import React, { useRef, useState, useEffect } from "react";
import Star from "./Star";

const Space = () => {
  const [stars, setStars] = useState([]);

  const destroyStar = (id) => {
setStars(prevStars => prevStars.filter(star => star.id !== id))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(), //unique ID
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 3, // random size star
      };
      setStars((prevStars) => [...prevStars, newStar]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="space-container">
      {stars.map(star => (
        <Star
         key = {star.id}
         {...star}
         onDestroy={destroyStar}
        />
      ))}
    </div>
  );
};

export default Space;
