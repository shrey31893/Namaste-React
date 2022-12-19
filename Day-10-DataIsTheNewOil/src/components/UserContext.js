import { createContext } from "react";

//before
// const UserContext = createContext("default@gmail.com")

//after
const UserContext = createContext({
  contextEmail: "default@gmail.com",
  setContextEmail: () => {},
});

export default UserContext;
