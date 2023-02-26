import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const { stop, start } = useInterval(1000, () => {
    setCounter((counter) => counter - 1000);
  });

  useEffect(() => {
    start();

    return () => {
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      stop();
    }
  }, [counter, stop]);

  return { counter };
};
