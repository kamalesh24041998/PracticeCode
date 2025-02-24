import React, { useContext } from "react";
import MessageContext from "./MessageContext"; // Import Context

function E() {
  const message = useContext(MessageContext); // Get data from context

  return (
    <div>
      <h2>Component E</h2>
      <p>Message: {message}</p>
    </div>
  );
}

export default E;
