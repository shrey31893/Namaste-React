import CardComponent from "./CardComponent.js";
import NoResultFoundComponent from "./NoResultFoundComponent.js";


const CardContainerComponent = ({ searchData }) => {
  if (searchData.length == 0) return <NoResultFoundComponent />;

  const comp =
    searchData &&
    searchData.length > 0 &&
    searchData.map((users) => {
      return <CardComponent users={users} />;
    });
  return comp;
};

export default CardContainerComponent;
