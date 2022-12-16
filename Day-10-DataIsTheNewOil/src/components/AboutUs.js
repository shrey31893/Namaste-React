import React from "react";
import { Outlet } from "react-router-dom";

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
        <h1> this is about us</h1>
        <h1> about us email - {this.state.email}</h1>
        <Outlet />
      </div>
    );
  }
}

export default AboutUs;
