import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartSlice.js";

const RestaurantComponent = () => {
  const { id } = useParams(); //for route params
  const [restaurantData, setRestaurantData] = useState([]); // to get data from our function to our componetn.

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    console.log("restaurant called");
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=22.684669846944015&lng=72.88277086268126&menuId=${id}`
    );
    const json = await data.json();
    console.log(json);
    setRestaurantData(json);
  }

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addItem({
        name: "pizza",
      })
    );
  };

  const removeItemToCart = () => {
    dispatch(deleteItem());
  };

  return (
    <>
      <div>
        <h1>this is restaurant detail pages..</h1>
        <h3>dasfasdadfs</h3>
        <h3> id is ts - {id}</h3>
      </div>
      <CardComponent restaurant={restaurantData} />
      <button
        className="font-bold m-5 p-5 bg-green-100"
        onClick={addItemToCart}>
        add item to cart
      </button>
      <button
        className="font-bold m-5 p-5 bg-green-100"
        onClick={removeItemToCart}>
        remove item to cart
      </button>
      <Link to="/search" className="font-bold m-5 p-5 bg-green-100">
        back to search
      </Link>
    </>
  );
};

export default RestaurantComponent;
