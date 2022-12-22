import { useContext, useState } from "react";
import DefaultTestContext from "./DefaultTestContext";

const BodyComponentUsingHook = () => {
  //   const { ctTesting, setCtTesting } = useContext(DefaultTestContext);
  const ctTesting = useContext(DefaultTestContext);
  return (
    <>
      <h1>test using hook - {ctTesting}</h1>
      {/* <button
        onClick={() => {
          setCtTesting("inside hook using update");
        }}
      >
        hook update
      </button> */}
    </>
  );
};

export default BodyComponentUsingHook;
