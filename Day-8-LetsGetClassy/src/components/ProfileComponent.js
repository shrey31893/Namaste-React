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
import { Outlet } from "react-router-dom";
class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    console.log("ProfileComponent - constructor");

    //this is how we create state in class comp.
    // here we have big object called state.
    // this.state = {
    //   email: "shrey@gmail.com",
    //   phone: "9662618731",
    // };

    this.state = {
      userInfo : {}
    };

    this.state.email = "updatedD@gmail.com";
  }

  async componentDidMount(){
    console.log("ProfileComponent - componentDidMount");
    const data = await fetch("https://api.github.com/users/shrey31893")
    const json = await data.json();
    console.log("json", json);

    // now in useEffect we are calling set method of hook.
    // only email gets updated. not phone.
    this.setState({
      userInfo: json,
      u: "prev"
    });
  }

  componentDidUpdate(x,y){
    console.log("ProfileComponent - componentDidUpdate");
    // console.log("ProfileComponent - componentDidUpdate - x"+ x.u);
    // console.log("ProfileComponent - componentDidUpdate - y"+ y.u);
  }

  render() {
    console.log("ProfileComponent - render");
    const {login, type, avatar_url} = this.state.userInfo;
    this.state.u = "new"
    return (
      <div>
        <h1>in profile, name - {this.props.name}</h1>
        {/* <h1>in profile, using state - email - {this.state.email}</h1>
        <h1>in profile, using state - phone - {this.state.phone}</h1> */}
           <h1>in profile, using state - username - {login}</h1>
        <h1>in profile, using state - type - {type}</h1>
        <img src={avatar_url}/>
        <Outlet/>
      </div>
    );
  }

}

export default ProfileComponent;
