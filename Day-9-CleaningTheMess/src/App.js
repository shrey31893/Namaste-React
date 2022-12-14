import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import title from './constants.js' --default export.
import { title } from "./utils/constants.js"; // -- named export.
// import * as constants from './constants.js'  -- usage -- {{constants.title}}
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {routeConfig} from "./utils/constants.js"

const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
