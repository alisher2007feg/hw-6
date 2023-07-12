import { useState } from "react";

export const useCounter = (initialCounter = 0) => {
  const [counter, setCounter] = useState(initialCounter);
  const decrease = () => {
    setCounter(counter - 1);
  };
  const increase = () => {
    setCounter(counter + 1);
  };

  return [counter, decrease, increase];
};
