import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to="/search">Seacrh</Link>
      &nbsp;
      <Link to="/aboutus">aboutus</Link>

    </div>
  );
};
 export default HeadingComponent;