import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
const RestaurantComponent = () => {
  const { id } = useParams(); //for route params
  const [restaurantData, setRestaurantData] = useState([]); // to get data from our function to our componetn.

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=22.684669846944015&lng=72.88277086268126&menuId=${id}`
    );
    const json = await data.json();
    console.log(json);
    setRestaurantData(json);
  }

  return (
    <>
      <div>
        <h1>this is restaurant detail page</h1>
        <h2> id is - {id}</h2>
      </div>
      <CardComponent restaurant={restaurantData} />
      <Link to="/search">back to search</Link>
    </>
  );
};

export default RestaurantComponent;
