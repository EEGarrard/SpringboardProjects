import React, { useState } from "react";
import NumberItem from "./NumberItem";

const genID = () => Math.random() * 1000

const NumbersList = () => {
  const [numbers, setNumbers] = useState([2, 5, 6, 7, 99]);
  const remove = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
    console.log("removing: ", num);
  };

  return (
    <ul>
      {numbers.map((n) => (
        <NumberItem n={n} remove={remove} key={genID()}/>
      ))}
    </ul>
  );
};

export default NumbersList;
