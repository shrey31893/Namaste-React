import { useDispatch } from "react-redux";
import { loginDetails, logout } from "./loginSlice.js";
import { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(loginDetails(email));
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          logout
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
