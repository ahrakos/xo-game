import React, { useState } from "react";

const useInc = () => {
  const [val, setVal] = useState([1, 2, 3, 4]);

  const add = () => {
    const newArr = [...val, 5];
    setVal(newArr);
    console.log(val);
  };

  return { add, val };
};

export const Ex2 = () => {
  const { val, add } = useInc();

  return (
    <div>
      <h1>Ex2</h1>
      <div>Value is: {val}</div>
      <button onClick={add}>Add 5</button>
    </div>
  );
};
