import React, { useState } from "react";

function App() {
/* You will need to use many state to keep the inut values and other needs */

/* You will need some function to handle the key pressed and button events */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  function onA(e) {
    setA(e.target.value);
  }

  function onB(e) {
    setB(e.target.value);
  }

  function compute() {
    const sum = Number(a) + Number(b);
    setResult(sum);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum */}
      <input value={result} disabled />

      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;