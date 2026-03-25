import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDIw12fgCWtvdUU6qBopbB4NYV1JvjJHIw",
//   authDomain: "clone-454c3.firebaseapp.com",
//   projectId: "clone-454c3",
//   storageBucket: "clone-454c3.firebasestorage.app",
//   messagingSenderId: "1080749408186",
//   appId: "1:1080749408186:web:7a840770dca64a15096783",
//   measurementId: "G-52NR4L5QCR"
// };
