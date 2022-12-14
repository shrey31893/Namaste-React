import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

const CardContainerComponent = ({ filteredRestaurants }) => {
  if (filteredRestaurants.length == 0) return <NoResultFoundComponent />;

  const cards =
    filteredRestaurants &&
    filteredRestaurants.map((restaurantData, index) => {
      return (
        <Link to={`/restaurant/${restaurantData?.data?.id}`}>
          <CardComponent
            restaurant={restaurantData}
            key={restaurantData?.data?.id}
          />
        </Link>
      );
      // return <CardComponent restaurant= {data[index]}/> OR Way using index.
    });
  return cards;
};

// OR Way
const CardContainerComponent1 = () =>
  data.map((data, index) => <CardComponent restaurant={data} />);

  export default CardContainerComponent;