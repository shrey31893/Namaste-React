import { useState } from "react";
//import data from "./data.json";


// now this becomes pure functions - who takes parameter and returns the filtered data.
const searchRestaurants = (searchText, restaurants) => {
  //to lower case.
  return restaurants?.filter(x => x.data.name.includes(searchText));
};

const SearchBar = ({ setFilteredRestaurants,restaurants }) => {
  const [searchText, setSearchText] = useState("");
  console.log("restaurants",restaurants.data)
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchText === "") {
            setFilteredRestaurants(restaurants);
          } else {
            const filteredRestaurants = searchRestaurants(searchText, restaurants);
            console.log(filteredRestaurants);
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
        <button>Search</button>
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
