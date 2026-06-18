import { useRef } from "react";

function RefDemo() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default RefDemo;
