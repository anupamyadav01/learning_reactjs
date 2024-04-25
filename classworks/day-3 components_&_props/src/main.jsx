import React from "react";
import ReactDOM from "react-dom/client";
// import { FirstComp, SecondComp } from "./App.jsx";
import Contacts from "./pages/Contacts/Contact";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {
      /* <FirstComp />
    <SecondComp /> */
      <Contacts />
    }
  </>
);
