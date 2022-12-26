import { Link } from "react-router-dom";

const HeadingComponent = () => {
  return (
    <div className="flex px-10 py-4 justify-between bg-pink-50">
      {/* <h1 className="text-3xl font-bold underline p-5 flex m-2 ml-4 pt-6 px py">
        {title}
      </h1> */}
      <Link to="/">
        <img
          className="h-11"
          src="https://restaurant.hungerhub.com/static/media/logo-app.acfffbaa.png"
        />
      </Link>
      <div className="flex space-x-8 cursor-pointer">
        <Link to="/search">Seacrh</Link>
        <Link to="/aboutus">about us</Link>
        <Link to="/aboutus">Contact up</Link>
        <Link to="/aboutus">support</Link>
      </div>
    </div>
  );
};
export default HeadingComponent;
