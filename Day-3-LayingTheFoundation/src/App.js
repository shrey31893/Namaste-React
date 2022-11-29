import React from "react";
import ReactDOM from "react-dom/client";

//basic react element.
const heading = React.createElement("h1", {}, "hello world from react");
console.log("heading react element", heading);

const blank = React.createElement("", {}, "");
console.log("blank react element", blank);

//functional component
// functional component means composition of react elements. (<> ni andar <>)
// and it is always a function.

// we are using arrow function for same.
// this is formal convention to use arrow function.

//general naming convention - Title Case

//if this function return some react element then it becomes react component.

const HeadingComponent = () => {
  return React.createElement("h1", {}, "react hello world component");
};

console.log("HeadingComponent", HeadingComponent); // PURE Function. and prints entire function body.

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(HeadingComponent);

root.render(HeadingComponent());


root.render(<HeadingComponent></HeadingComponent>);


root.render(<HeadingComponent/>);


// //ERROR!! - Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render.
// Or maybe you meant to call this function rather than return it.

/**
 * JSX - meaning Javascript XML
 * fancy way of writing html inside javascript file.
 * after es6, jsx came into picture
 */

//JSX
// when babel sees JSX, it compiles the whole code and
// converts JSX code into javascript code.

const HeadingComponentUsingJSX = <h1>Hello world jsx</h1>;


const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "hello world from react"
);

console.log("HeadingComponentUsingJSX", HeadingComponentUsingJSX);
console.log("heading1", heading1);

//above two lines are similar for compiler.
// because React.createElement going to generate h1 tag at the end of the day.
//babel - babel is converting ES to older version of javascript. (one of the thing.)

// babel understands jsx. behind the scene, (jsx) it uses same react.createelemnt.
// Reactelement is -> object -> at DOM it becomes HTML Element..

//now what does JSX do?
// JSX -> reactElement (behind the scenes) -> object -> at DOM as html element.

// Question - what is expression..?
// which returns value / statement.

// this is valid JSX - (<h1>hello</h1)
// we no need to assign expression to something everytime.

// JSX is not html but it is likely html. you can't write html inside jsx
// so JSX is not purely html.

// JSX is HTML like syntax.

//Question = what are advantage of JSX..? (as JSX is react.createElement then what is advantage)
//Answer -
//readability, syntax sugar, fast to write code
// react uses virtual DOM. JSX is visualization of html.
// JSX is easier to read.

// How we create children using react.createElemnt

//output should be like this

{
  /* <div id="title">
      <h1 id="heading">Hello Dosto</h1>
      <h2 id="heading2">welcome to react classes</h2>
      <h3 id="heading3">we learn react from basics</h3>
  </div> */
}

const numberOfMonths = 3;
const childs = React.createElement("div", { id: "title" }, [
  React.createElement("h1", { id: "heading", key: "h1" }, "Hello Dosto"),
  React.createElement("h2", { id: "heading2", key: "h2" }, "welcome to react classes"),
  React.createElement(
    "h3",
    { id: "heading3", key: "h3" },
    "we learn react from basics"
  ),
]);

// root.render(childs);
//understand the pain just to write this small html we need to write so many things.

const months = 2;

const childsUsingJSX = 
  <div>
    <h1>Hello Dosto</h1>
    <h2>welcome to react classes</h2>
    <h3>we learn react from basics in {months} months</h3>
  </div>
;

root.render(childsUsingJSX); //- WORKS
//root.render(<childsUsingJSX></childsUsingJSX>); ERROR!!, because it is not a function. 

// generally when jsx has mulitple line we are enclose it withinn () for better readability.




1-28