import { createContext } from "react";

const ThemeContext = createContext({
  ThemeStyle: "dark",
  setThemeStyle: () => {},
});

export default ThemeContext;
