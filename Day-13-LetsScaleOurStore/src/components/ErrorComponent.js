import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
const errorData = useRouteError();
    return (
    <div style={{color : "red"}}>
      <h1>OOPS..! </h1>
      <h2>something went wrong.</h2>
      <h3>Details : {console.log(errorData)} </h3>
      <h3>status : {errorData.status}</h3>
      <h3>status text : {errorData.statusText}</h3>
    </div>
  );
};
export default ErrorComponent;