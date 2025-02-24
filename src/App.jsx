import React from "react";
import MessageContext from "./MessageContext"; // Import Context
import A from "./A"; // First child component

function App() {
  const message = "Hello from Context API!";

  return (
    <MessageContext.Provider value={message}>
      <h1>useContext Example</h1>
      <A />
    </MessageContext.Provider>
  );
}

export default App;