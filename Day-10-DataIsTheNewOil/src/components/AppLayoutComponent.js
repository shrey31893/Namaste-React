import HeadingComponent from "./HeadingComponent.js"
import { Outlet } from "react-router-dom";

const AppLayoutComponent = () => {
    return (
      <>
        <HeadingComponent />
        <Outlet />
        {/* THIS IS COMMENTED FOR CHILD ROUTES - <BodyComponent /> */}
        {/* <hr/> */}
        {/* <BeautifulCardComponent /> */}
      </>
    );
  };
  
  export default AppLayoutComponent;