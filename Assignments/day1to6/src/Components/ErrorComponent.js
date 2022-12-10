import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorDetail = useRouteError();
  return (
    <>
      <h1>something went wrong</h1>
      <h2> error detail : {errorDetail.statusText || errorDetail.message}</h2>
    </>
  );
};
export default ErrorComponent;
