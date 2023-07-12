import { Fragment } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const [counter, decrease, increase] = useCounter();
  const [counter2, decrease2, increase2] = useCounter(3);
  return (
    <Fragment>
      <div>
        <h1>{counter}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <h1>{counter2}</h1>
        <button onClick={decrease2}>-</button>
        <button onClick={increase2}>+</button>
      </div>
    </Fragment>
  );
};

export default Counter;
