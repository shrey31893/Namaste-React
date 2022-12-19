import HeadingComponent from "./HeadingComponent.js"
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext.js";
import { useState } from "react";

const AppLayoutComponent = () => {
  const [ctEmail, setCtEmail] = useState("mydefaultstate@email.com");
    return (
      //before
      // <UserContext.Provider value="shrey">

      //after
      <UserContext.Provider value={{contextEmail: ctEmail, setContextEmail: setCtEmail}}>
        <HeadingComponent />
        <Outlet />
        {/* THIS IS COMMENTED FOR CHILD ROUTES - <BodyComponent /> */}
        {/* <hr/> */}
        {/* <BeautifulCardComponent /> */}
      </UserContext.Provider>
    );
  };
  
  export default AppLayoutComponent;