import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import { BeautifulCardComponent } from "./BeautifulCardComponent.js";
import data from "./data.json";
// import title from './constants.js' --default export.
import { title } from "./constants.js"; // -- named export.
// import * as constants from './constants.js'  -- usage -- {{constants.title}}
import SearchBar from "./SearchBar.js";
import NoResultFoundComponent from "./NoResultFoundComponent.js";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
  if (filteredRestaurants.length == 0) return <NoResultFoundComponent />;

  const cards = filteredRestaurants.map((restaurantData, index) => {
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
   const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  //const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Card-Container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filteredRestaurants={filteredRestaurants} />
    </div>
  );
};

async function fetchData() {
  const data = await fetch("");
  const json = await data.json();

  console.log(json);
}

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
