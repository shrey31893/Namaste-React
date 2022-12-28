import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { addItem, clearItem, deleteItem } from "./cartSlice.js";
import FoodItemComponent from "./FoodItemComponent";

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

  const ClearCart = () => {
    dispatch(clearItem());
  };

  if (!restaurantData?.data?.menu) return null;

  return (
    <div className="flex">
      <div>
        <h1>this is restaurant detail pages..</h1>
        <h3>dasfasdadfs</h3>
        <h3> id is ts - {id}</h3>
        <CardComponent restaurant={restaurantData} />
        <button
          className="font-bold m-5 p-5 bg-green-100"
          onClick={addItemToCart}
        >
          add item to cart
        </button>
        <button
          className="font-bold m-5 p-5 bg-green-100"
          onClick={removeItemToCart}
        >
          remove item to cart
        </button>
        <button className="font-bold m-5 p-5 bg-green-100" onClick={ClearCart}>
          clear cart
        </button>
        <Link to="/search" className="font-bold m-5 p-5 bg-green-100">
          back to search
        </Link>
      </div>
      <div className="px-20">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.values(restaurantData?.data?.menu?.items).map((item) => {
                console.log(item);
                return <FoodItemComponent items={item} isFromCart={false} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComponent;
