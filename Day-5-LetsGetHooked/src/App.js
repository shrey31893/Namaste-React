import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import { BeautifulCardComponent } from "./BeautifulCardComponent.js";
import data from "./data.json";
// import title from './constants.js' --default export.
import { title } from "./constants.js"; // -- named export.
// import * as constants from './constants.js'  -- usage -- {{constants.title}}
import SearchBar from "./SearchBar.js";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
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
  return (
    <div className="Card-Container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filteredRestaurants={filteredRestaurants} />
    </div>
  );
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
