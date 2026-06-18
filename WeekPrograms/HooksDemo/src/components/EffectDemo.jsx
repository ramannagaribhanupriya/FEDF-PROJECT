import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>useEffect</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>        Increase      </button>
    </div>
  );
}
export default EffectDemo;
 
