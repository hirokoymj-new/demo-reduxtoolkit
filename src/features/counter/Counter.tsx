import React, { useState } from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <hr />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <hr />
        <input
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(parseInt(e.target.value));
          }}
        />

        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment By Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(incrementAmount))}>
          decrement By Amount
        </button>
      </div>
    </div>
  );
};
