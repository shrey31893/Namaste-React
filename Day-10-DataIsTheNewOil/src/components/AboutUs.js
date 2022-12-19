import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext";

// const AboutUs = () => {
//   return (
//     <div>
//       <h1> this is about us</h1>
//       <Outlet />
//     </div>
//   );
// };

class AboutUs extends React.Component {
  constructor() {
    super();
    console.log("AboutUs - constructor");
    this.state = {
      email:"test"
    };
  }

  async componentDidMount() {
    console.log("AboutUs - componentDidMount");
    // this.setState({
    //   email: "one more"
    // });
  }

  componentDidUpdate(){
    console.log("AboutUs - componentDidUpdate");
  }

  render() {
    console.log("AboutUs - render");
    return (
      <div>
        {/* before */}
        {/* <UserContext.Consumer>
          {
            (data) => {
              return <span>about us context api consumer test - {data}</span>
            }
          }
        </UserContext.Consumer> */}

        {/* After */}
        <UserContext.Consumer>
          {
            ({contextEmail, setContextEmail}) => {
              return (
              <>
              <button onClick={() => {setContextEmail("aboutusupdate@gmail.com")}}>click to update context email</button>
              <span>about us context api consumer test - {contextEmail}</span>
              </>
              )
            }
          }
        </UserContext.Consumer>
        <h1> this is about us</h1>
        <h1> about us email - {this.state.email}</h1>
        <Outlet />
      </div>
    );
  }
}

export default AboutUs;
