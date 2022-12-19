import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.js"
import CardContainerComponent from "./CardContainerComponent.js"

const BodyComponent = () => {
    //const [filteredRestaurants, setFilteredRestaurants] = useState(data);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [stateNameForPassing,setStateNameForPassing] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      
      <div className="Card-Container">
        <SearchBar
          setFilteredRestaurants={setFilteredRestaurants}
          restaurants={restaurants}
          setStateNameForPassing = {setStateNameForPassing}
        />
        <CardContainerComponent filteredRestaurants={filteredRestaurants}
        stateNameForPassing = {stateNameForPassing} />
      </div>
    );
  
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.196537&lng=72.63304&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      console.log(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
  };
  
  export default BodyComponent;