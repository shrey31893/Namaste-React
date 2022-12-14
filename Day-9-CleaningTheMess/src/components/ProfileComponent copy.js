const ProfileComponent2 = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // use for external world.
  useEffect(() => {
    // fetch data
    // update using set state method.
  }, []);

  return (
    <div>
      <h1>in profile</h1>
    </div>
  );
};

import { Component, useEffect, useState } from "react";
class ProfileComponentCC extends Component {
  constructor(props) {
    super(props);
    console.log("ProfileComponent-CC - constructor");

    //this is how we create state in class comp.
    // here we have big object called state.
    this.state = {
      email: "shrey@gmail.com",
      phone: "9662618731",
    };

    this.state.email = "updatedD@gmail.com";
  }

  componentDidMount(){
    console.log("ProfileComponent-CC - componentDidMount")
  }

  componentWillUnmount(){
    console.log("ProfileComponent-CC - componentWillUnmount")
  }

  render() {
    console.log("ProfileComponent-CC - render");
    return (
      <div>
        <h1>in profile, name - {this.props.name}</h1>
        <h1>in profile, using state - email - {this.state.email}</h1>
        <h1>in profile, using state - phone - {this.state.phone}</h1>
      </div>
    );
  }
}

export default ProfileComponentCC;
