# Redux Toolkit

- [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

**store.ts**

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**index.tsx**

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

```js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
```

**Counter.tsx**

```js
export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState < number > 2;

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
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Links

- React: https://reactjs.org/
- Redux: https://redux.js.org/
- Redux toolkit: https://redux-toolkit.js.org/
- React Redux: https://react-redux.js.org/
