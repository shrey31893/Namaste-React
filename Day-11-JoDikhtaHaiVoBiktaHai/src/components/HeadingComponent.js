import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";
import ThemeContext from "./ThemeContext.js";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to="/search">Seacrh</Link>
      &nbsp;
      <Link to="/aboutus">aboutus</Link>
      {/* before */}
      {/* <UserContext.Consumer>
        {(data) => {
          return <span>here - {data}</span>;
        }}
      </UserContext.Consumer> */}
      {/* After */}
      <UserContext.Consumer>
        {({ contextEmail }) => {
          return (
            <h3>
              <span>here - {contextEmail}</span>
            </h3>
          );
        }}
      </UserContext.Consumer>
      <br />
      <ThemeContext.Consumer>
        {({ ThemeStyle, setThemeStyle }) => {
          return (
            <button
              onClick={() => {
                setThemeStyle(ThemeStyle === "brown"? "dark" : "brown");
              }}
            >
              click to change theme
            </button>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
};
export default HeadingComponent;
