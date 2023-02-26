import React, { useState } from "react";

const useCustomHook = () => {
  const [val, setVal] = useState(0);
  return { val, setVal };
};

const A = () => {
  const { val } = useCustomHook();
  return <div>A is {val}</div>;
};

const B = () => {
  const { val, setVal } = useCustomHook();
  return (
    <div>
      <div>B is {val}</div>;
      <button onClick={() => setVal((val) => val + 1)}>Increment</button>
    </div>
  );
};

export const Ex3 = () => {
  return (
    <div>
      <h1>Ex3</h1>
      <A />
      <B />
    </div>
  );
};
