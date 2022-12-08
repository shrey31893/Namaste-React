import {TeamName, TeamDesc} from "../util/constants.js"

const HeadingComponent = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>{TeamName}</h1>
        <p>
          {TeamDesc}
        </p>
      </div>
    </div>
  );
};

export default HeadingComponent;