import logo from "./logo.svg";
import "./App.css";
import BodyComponent from "./BodyComponent";
import BodyComponentUsingHook from "./BodyComponentUsingHook";
import DefaultTestContext from "./DefaultTestContext";
import { useState } from "react";

function App() {
  // const [email, setEmail] = useState("");
  return (
    <>
      {/* <DefaultTestContext.Provider
        value={{ ctTesting: email, setCtTesting: setEmail }}
      > */}
      <DefaultTestContext.Provider>
        <div className="App">
          <BodyComponent />
        </div>
      </DefaultTestContext.Provider>
      <BodyComponentUsingHook />
      {/* <BodyComponentUsingHook /> try this. */}
      {/* It will only update the component within its provider boundry */}
    </>
  );
}

export default App;
