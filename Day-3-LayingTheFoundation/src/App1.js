import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const TestDiv = <h1>Test</h1>;
console.log("TestDiv", TestDiv);

const TestDivFC = () => <h1>Test</h1>;
console.log("TestDivFC", TestDivFC);

const root = ReactDOM.createRoot(document.getElementById("root"));

//const heading = createElement("h1","","helo world");
//root.render(heading);

// const SingleLineComponent = () => <h1>hi</h1>;
// root.render(<SingleLineComponent />);

const FooterComponent = () => {
  return <h3>this is footer component. {new Date().getFullYear()}</h3>;
};

// const HeadingComponent = () => {
//   return (
//     <div id="head" className="test" tabIndex="1">
//       <h1>hi</h1>
//       <h2> ,hello</h2>
//       <FooterComponent></FooterComponent>
//     </div>
//   );
// };
// root.render(<HeadingComponent />);

const HeadingComponentWithoutReturn = () => (
  <div id="head" className="test" tabIndex="1">
    <h1>hi</h1>
    <h2> ,hello weihtou rerun</h2>
    <FooterComponent>
      {/* <h4>inside footer</h4> -- would NOT be printed */} 
    </FooterComponent>
    <FooterComponent></FooterComponent>
    {<FooterComponent></FooterComponent>}
    {/* {FooterComponent} - ERROR - same as that <></> */}
    {console.log(FooterComponent())}
  </div>
);

root.render(<HeadingComponentWithoutReturn />);

// function HeadingComponentWithExpression(){
//   return (
//     <div>
//       <h1>Hello woprld using function expression</h1>
//     </div>
//   )
// }
// root.render(<HeadingComponentWithExpression />);

/**
const HeadingComponent = () => {
    return (
        <React.Fragment>
        <div>
            <h1>hello world component</h1>
        </div>
        <div>
            <h2>hello using h2</h2>
        </div>
        </React.Fragment>
    )
}
console.log(HeadingComponent);
root.render(HeadingComponent());
 */
