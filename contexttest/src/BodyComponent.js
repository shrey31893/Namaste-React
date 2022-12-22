import DefaultTestContext from "./DefaultTestContext";
const BodyComponent = () => {
  return (
    <>
      <h1>normal tst</h1>
      {/* <DefaultTestContext.Consumer>
        {({ ctTesting, setCtTesting }) => {
          return (
            <>
              <h1> using consuemr way {ctTesting}</h1>
              <button
                onClick={() => {
                  setCtTesting("from body comp without hook");
                }}
              >
                click to update
              </button>
            </>
          );
        }}
      </DefaultTestContext.Consumer> */}

      <DefaultTestContext.Consumer>
        {(ctTesting) => {
          return (
            <>
              <h1> using consuemr way {ctTesting}</h1>
            </>
          );
        }}
      </DefaultTestContext.Consumer>
    </>
  );
};

export default BodyComponent;
