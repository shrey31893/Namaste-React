/**
 * This file contain example of HOC.
 */

const TestComponent = () => {
    return (
      <div>
        <h1>Test for HOC</h1>
      </div>
    );
  }
  
  // this is called higher order component
  // a component which returns another component.
  export const BeautifulCardComponent = () => {
    return (
      <div className="style-container">
        <TestComponent/>
      </div>
    );
  }