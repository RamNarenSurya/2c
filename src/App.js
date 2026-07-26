import React, { useState } from "react";

function ClickButton() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div style={{ color: "blue", textAlign: "center", marginTop: "50px" }}>
      <h2>React Button Click Handler</h2>

      <p>{message} button</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ClickButton />
    </div>
  );
}

export default App;