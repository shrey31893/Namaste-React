import { useState } from "react";
//import data from "./data.json";
import stateObj from "../utils/state-city.json";

// now this becomes pure functions - who takes parameter and returns the filtered data.
const searchRestaurants = (searchText, restaurants) => {
  //to lower case.
  return restaurants?.filter((x) => x.data.name.includes(searchText));
};

const SearchBar = ({ setFilteredRestaurants, restaurants }) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  // console.log("restaurants", restaurants.data);
  // console.log("stateObj", Object.keys(stateObj));
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchText === "") {
            setFilteredRestaurants(restaurants);
          } else {
            const filteredRestaurants = searchRestaurants(
              searchText,
              restaurants
            );
            // console.log(filteredRestaurants);
            setFilteredRestaurants(filteredRestaurants);
          }
        }}
      >
        <input
          id="restaurant"
          placeholder="search restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        test value - <h1>{searchText}</h1>
        <select
          value={stateName}
          title="eeasef"
          onChange={(e) => {
            setStateName(e.target.value);
          }}
        >
          {Object.keys(stateObj).map((state1, index) => {
            return (
              <option key={state1} value={state1}>
                {state1}
              </option>
            );
          })}
        </select>
        <select
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);            
            console.log(cityName);
          }}
        >
          <option key={0} value="0">
            --select city--
          </option>
          {stateObj &&
            stateName &&
            Object.keys(stateObj[stateName]).map((city) => {
              const cityExtracted = stateObj[stateName][city];
              return <option key={cityExtracted}>{cityExtracted}</option>;
            })}
        </select>
        <button
          onClick={() => {
            console.log(cityName);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;

// import { useState } from "react";

// const SearchBar = () => {
//     function textSeachChange(e){
//         setSearchText(e.target.value);
//     }

//     const [searchText, setSearchText] = useState("");

//   return (
//     <div className="search">
//       <form>
//         <input
//           id="restaurant"
//           placeholder="search restaurant"
//           value={searchText}
//           onChange = {textSeachChange}
//         />
//         test value - <h1>{searchText}</h1>
//         <button>Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
