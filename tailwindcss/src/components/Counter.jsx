import React, { useState } from "react";

const Counter = () => {
  let [val, setVal] = useState("Hello Jatin");

  const increment = () => {
    setVal(val = "Hiiii Neha");
    console.log(val);
  };

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={increment}>Click Me</button>
    </div>
  );
};

export default Counter;
