import { useState, useEffect } from "react";
import CardContainerComponent from "./CardContainerComponent";
import HeadingComponent from "./HeadingComponent";
import SearchComponent from "./SearchbarComponent";
import users from "../util/users.json";
import { FetchDataFromUrl } from "../util/commonfunctions.js";

const BodyComponent = () => {
  const [searchData, setSearchData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    FetchData();
    // const data = FetchDataPromiseWay();
    // console.log(data);
    // setSearchData(data);
    // setOriginalData(data);
  }, []);

  async function FetchData() {
    const outputUserData = [];
    users &&
      users.map(async (user) => {
        //const baseUrl = `https://api.github.com/users/${user.username}`;
        const baseUrl = `http://localhost:3000/users/${user.id}`;
        const userData = await FetchDataFromUrl(baseUrl);
        outputUserData.push(userData);
        setSearchData([...searchData, ...outputUserData]);
        setOriginalData([...searchData, ...outputUserData]);      
      });
      console.log("bbar",outputUserData);
  }

  // async function FetchDataPromiseWay() {
  //   Promise.all(
  //     users.map(async (user) => {
  //       const baseUrl = `https://api.github.com/users/${user.username}`;
  //       const userData = await FetchDataFromUrl(baseUrl);
  //       return userData;
  //     })
  //   )
  // }

  return (
    <>
      <HeadingComponent />
      <SearchComponent
        setSearchData={setSearchData}
        searchData={searchData}
        originalData={originalData}
      />
      <br />
      <div className="container">
        <div className="row">
          <CardContainerComponent searchData={searchData} />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
