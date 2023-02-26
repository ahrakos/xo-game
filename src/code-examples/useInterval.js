import { useRef } from "react";

export const useInterval = (ms, onTick) => {
  const ref = useRef();
  const start = () => {
    const intervalId = setInterval(onTick, ms);
    ref.current = intervalId;
  };

  const stop = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  return { stop, start };
};
