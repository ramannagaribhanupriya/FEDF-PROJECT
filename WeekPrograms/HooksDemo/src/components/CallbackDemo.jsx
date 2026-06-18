import { useState, useCallback } from "react";

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    alert("useCallback function executed");
  }, []);

  return (
    <div>
      <h2>useCallback</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </div>
  );
}

export default CallbackDemo;




