import { useState } from "react";

const searchValue = (searchText, searchData) => {
  if (searchText == "") return searchData;

  const filteredData =
    searchData &&
    searchData.filter((x) =>
      x.login.toLowerCase().includes(searchText.toLowerCase())
    );
  return filteredData;
};

const SearchComponent = ({ setSearchData, searchData, originalData}) => {
  const [searchText, setSearchText] = useState("");
   console.log("originalData", originalData);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchData(originalData);
              if (searchText != "") {
                const filteredData = searchValue(searchText, searchData);
                setSearchData(filteredData);
                console.log("after fukter", filteredData);
              }
            }}
          >
            Enter Name to search -
            <input
              id="txtSearch"
              placeholder="Enter Search text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button type="submit" className="btn btn-primary">
              Search Users
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
