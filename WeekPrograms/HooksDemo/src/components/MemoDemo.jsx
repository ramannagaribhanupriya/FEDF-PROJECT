import { useState, useMemo } from "react";

function MemoDemo() {
  const [number, setNumber] = useState(1);

  const square = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>useMemo</h2>

      <p>Square: {square}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </div>
  );
}

export default MemoDemo;
