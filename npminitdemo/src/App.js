import React, {createElement} from "react";
import ReactDOM from "react-dom/client";

const h1 = createElement("h1",{id:"title", class: 'shrey'},"hi");

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)