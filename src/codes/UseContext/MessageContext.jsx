import { createContext } from "react";

// Create Context
const MessageContext = createContext();

export default MessageContext;



// Why Use useContext?
// ✅ Avoids props drilling (No need to pass props from parent → child → grandchild).
// ✅ Centralized data management (like a mini state manager).
// ✅ Easier to maintain compared to passing props manually.

// 🚀 Example: useContext Instead of Props Drilling
// Let's see how we can replace props drilling with useContext.

// 🛠 Steps to Implement useContext these are there steps to create and need to create these 3 that are:
// Create a Context (MessageContext)
// Provide the Context (App.js)
// Consume the Context (E.js)

// After createing these 3 files 




// 1️⃣ Create MessageContext.js (Context File)
// import { createContext } from "react";

//                                                         // Create Context
// const MessageContext = createContext();

// export default MessageContext;

// This creates a context that can hold shared data.




// 2️⃣ App.js (Provide Context to Components)
// import React from "react";
// import MessageContext from "./MessageContext";          // Import Context
// import A from "./A"; // First child component

// function App() {
//   const message = "Hello from Context API!";

//   return (
//     <MessageContext.Provider value={message}>
//       <h1>useContext Example</h1>
//       <A />
//     </MessageContext.Provider>
//   );
// }

// export default App;

// MessageContext.Provider → Provides data (message) to all child components.
// No need to pass message as props! 🎉



// 3️⃣ A.js, B.js, C.js, D.js (No Props Required!)
// import React from "react";
// import B from "./B";

// function A() {
//   return (
//     <div>
//       <h2>Component A</h2>
//       <B />
//     </div>
//   );
// }

// export default A;


// No more props passing!
// Just import and render child components normally.



// 4️⃣ E.js (Consume Context Using useContext)
// import React, { useContext } from "react";
// import MessageContext from "./MessageContext"; // Import Context

// function E() {
//   const message = useContext(MessageContext); // Get data from context

//   return (
//     <div>
//       <h2>Component E</h2>
//       <p>Message: {message}</p>
//     </div>
//   );
// }

// export default E;


// useContext(MessageContext) → Fetches data directly from the context.
// No need to pass props through A → B → C → D → E.



// 🎯 How This Works
// Context is created in MessageContext.js.
// App.js provides the value using <MessageContext.Provider>.
// Any child component (even deeply nested ones like E.js) can directly access the data using useContext.


// 🔥 Why useContext is Better than Props Drilling
// Feature	            Props Drilling 🚨	                                    useContext ✅
// Data Flow	        Parent → Child → Grandchild (Manual Passing)	        Directly available in any child component
// Code                 Simplicity	Complex (Many props to pass)	            Simple (No props passing needed)
// Reusability	        Hard to maintain	                                    Easy to reuse across components
// Performance	        Unnecessary re-renders	                                Optimized data access

// 🔹 Final Thoughts
// Use Props when passing data only 1 or 2 levels down.
// Use useContext when you need global data access (like themes, authentication, etc.).
// For even better state management, use Redux or Zustand.
