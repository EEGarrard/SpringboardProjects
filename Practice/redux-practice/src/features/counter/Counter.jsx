import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterslice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add
        </button>
        <button onClick={() =>{resetAll}}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
