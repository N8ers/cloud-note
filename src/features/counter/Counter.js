import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

import "./Counter.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment 5
        </button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(-5))}>
          Decrement 5
        </button>
      </div>
    </div>
  );
}
