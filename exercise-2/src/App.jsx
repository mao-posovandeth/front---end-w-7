import React, { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  const hasContent = textValue.length > 0;
  function handleKeyPress(event) {
    setTextValue(event.target.value);
  } 

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      {/* Added value and onChange to track typing */}
      <input 
        type="text" 
        value={textValue} 
        onChange={handleKeyPress} 
      />

      <p>
        <label>Here is the text in upper case</label>
        <input 
          disabled 
          value={textValue.toUpperCase()} 
        />
      </p>
    </main>
  );
}

export default App;