import React, { useState } from "react";

function App() {
  const [isRaining, setIsRaining] = useState(false);

  /* You will need to use a boolean state to manage the weather */

  function onSunClick() {
    setIsRaining(false);
    // Complete this code when we click on Sunny Time
  }

  function onRainClick() {
    setIsRaining(true);
    // Complete this code when we click on Sunny Time
  }

  function getTitle() {
    return isRaining ? "rain time" : "sun time";
    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() {
    return isRaining ? 'blue' : 'yellow';
    // This function manage the main class value, depending on the weather
  }

  return (
    <main style={{ backgroundColor: getBackgroundColor(), minHeight: '10vh' }}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;