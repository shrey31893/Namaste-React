import { useEffect, useState } from "react";
import stateObj from "../utils/state-city.json";

const useCities = (stateName) => {
  const [cities, setCities] = useState([]);

  // Api call and get the cities.
  useEffect(() => {
    fetchData();
  }, [stateName]);

  async function fetchData() {
    //assume this is api.
    // const data = await fetch("");    
    const json = stateObj[stateName];
    setCities(json);
  }
  return cities;
};
export default useCities;

//OR way - async function inside useEffect dirferctly

// useEffect(() => {
// fetchData();
//   async function fetchData() {
//     const json = stateObj[stateName];
//     setCities(json);
//   }
// }, []);
