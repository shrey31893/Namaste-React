import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./components/CardComponent.js";
import { BeautifulCardComponent } from "./components/BeautifulCardComponent.js";
import data from "./utils/data.json";
// import title from './constants.js' --default export.
import { title } from "./utils/constants.js"; // -- named export.
// import * as constants from './constants.js'  -- usage -- {{constants.title}}
import SearchBar from "./components/SearchBar.js";
import NoResultFoundComponent from "./components/NoResultFoundComponent.js";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
  if (filteredRestaurants.length == 0) return <NoResultFoundComponent />;

  const cards = filteredRestaurants && filteredRestaurants.map((restaurantData, index) => {
    return (
      <CardComponent restaurant={restaurantData} key={restaurantData.id} />
    );
    // return <CardComponent restaurant= {data[index]}/> OR Way using index.
  });
  return cards;
};

const CardContainer1 = () =>
  data.map((data, index) => <CardComponent restaurant={data} />);

const BodyComponent = () => {
   //const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Card-Container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} restaurants = {restaurants}/>
      <CardContainer filteredRestaurants={filteredRestaurants} />
    </div>
  );

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.196537&lng=72.63304&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
};

const AppLayoutComponent = () => {
  return (
    <>
      <HeadingComponent />
      <BodyComponent />
      {/* <hr/> */}
      <BeautifulCardComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
