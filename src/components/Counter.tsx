import { useState } from "react";

function Counter() {
  const [counterValue, setCounter] = useState(0);

  return (
    <>
      <p>{counterValue}</p>
      <div>
        <button onClick={() => setCounter(counterValue + 1)}>Increment</button>
        <button onClick={() => setCounter(counterValue - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
