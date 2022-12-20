import HeadingComponent from "./HeadingComponent.js";
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext.js";
import { useState } from "react";
import ThemeContext from "./ThemeContext.js";

const AppLayoutComponent = () => {
  const [ctEmail, setCtEmail] = useState("mydefaultstate@email.com");
  const [ctTheme, setCtTheme] = useState("dark")

  return (
    //before
    // <UserContext.Provider value="shrey">

    //after
    // <UserContext.Provider value={{contextEmail: ctEmail, setContextEmail: setCtEmail}}>
    //   <HeadingComponent />
    //   <Outlet />
    //   {/* THIS IS COMMENTED FOR CHILD ROUTES - <BodyComponent /> */}
    //   {/* <hr/> */}
    //   {/* <BeautifulCardComponent /> */}
    // </UserContext.Provider>

    <ThemeContext.Provider value={{ThemeStyle: ctTheme, setThemeStyle: setCtTheme}}>
      <UserContext.Provider
        value={{ contextEmail: ctEmail, setContextEmail: setCtEmail }}
      >
        <HeadingComponent />
        <Outlet />
        {/* THIS IS COMMENTED FOR CHILD ROUTES - <BodyComponent /> */}
        {/* <hr/> */}
        {/* <BeautifulCardComponent /> */}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppLayoutComponent;
