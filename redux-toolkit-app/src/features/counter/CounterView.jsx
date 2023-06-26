import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByNumber, reset } from "./counterSlice";

export default function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByNumber(5))}>
        increment by 5
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
