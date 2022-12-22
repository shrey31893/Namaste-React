//import AboutUs from "../components/AboutUs.js";
import ErrorComponent from "../components/ErrorComponent.js";
import RestaurantComponent from "../components/RestaurantComponent.js";
import ProfileComponentCC from "../components/ProfileComponent copy.js";
import ProfileComponent from "../components/ProfileComponent.js";
import AppLayoutComponent from "../components/AppLayoutComponent.js";
// import BodyComponent from "../components/BodyComponent.js";
import { lazy, Suspense } from "react";

// this import - babel, parcel
// import - defer loading
export const AboutUs = lazy(() => import("../components/AboutUs.js"));
export const BodyComponent = lazy(() =>
  import("../components/BodyComponent.js")
);

export const title = "Hunger Hub";

export const routeConfig = [
  {
    path: "/",
    element: <AppLayoutComponent />, //JSX not without JSX.
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/restaurant/:id",
        element: <RestaurantComponent />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1>searching...</h1>}>
            <BodyComponent />
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>loading..</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileComponent name={"shrey from props"} />,
            children: [
              {
                path: "profilecc",
                element: <ProfileComponentCC name={"shrey from props"} />,
              },
            ],
          },
        ],
      },
    ],
  },
];
