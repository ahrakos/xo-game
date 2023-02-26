import React, { useState } from "react";

const useInc = () => {
  const [val, setVal] = useState(0);

  const inc = () => {
    setVal(val + 1);
    console.log(val);
  };

  return { inc, val };
};

export const Ex1 = () => {
  const { val, inc } = useInc();

  return (
    <div>
      <h1>Ex1</h1>
      <div>Value is: {val}</div>
      <button onClick={inc}>Increment</button>
    </div>
  );
};
