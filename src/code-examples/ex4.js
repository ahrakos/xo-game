import React, { useContext, useState } from "react";

const MainContext = React.createContext({
  a: 1,
  b: 2,
  setA: (a) => {},
  setB: (b) => {},
});

const A = () => {
  const { a } = useContext(MainContext);
  console.log("A is rendering...");
  return <div>A is {a}</div>;
};

const B = () => {
  const { b } = useContext(MainContext);
  console.log("B is rendering...");
  return <div>B is {b}</div>;
};

const D = () => {
  console.log("D is rendering...");
  return <div>D</div>;
};

const C = React.memo(() => {
  console.log("C is rendering...");
  return (
    <div>
      C
      <D />
    </div>
  );
});

export const Ex4 = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <MainContext.Provider value={{ a, b, setA, setB }}>
      <div>
        <h1>Ex4</h1>
        <A />
        <B />
        <C />
        <button onClick={() => setA((a) => a + 5)}>Change A</button>
      </div>
    </MainContext.Provider>
  );
};
