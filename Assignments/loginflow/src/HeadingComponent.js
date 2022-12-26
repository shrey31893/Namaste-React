import { useSelector } from "react-redux";

const HeadingComponent = () => {
  const selector = useSelector((store) => store.login.email);
  return (
    <>
      <div>this is header component</div>
      <div>logged in email - {selector}</div>
    </>
  );
};

export default HeadingComponent;
