import React from "react";
import { useCounter } from "./useCounter";

export const Ex5 = () => {
  const { counter } = useCounter(5000);

  return (
    <div>
      <h1>Ex5</h1>
      <div>Counter is {counter}</div>
    </div>
  );
};
