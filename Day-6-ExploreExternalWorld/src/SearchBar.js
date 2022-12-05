import { useState } from "react";
import data from "./data.json";

const searchRestaurants = (searchText) => {
  //to lower case.
  return data.filter(x => x.name.includes(searchText));
};

const SearchBar = ({ setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchText === "") {
            setFilteredRestaurants(data);
          } else {
            const filteredRestaurants = searchRestaurants(searchText);
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
