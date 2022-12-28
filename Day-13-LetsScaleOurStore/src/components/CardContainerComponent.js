import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import NoResultFoundComponent from "./NoResultFoundComponent.js";

const CardContainerComponent = ({
  filteredRestaurants,
  stateNameForPassing,
}) => {
  if (filteredRestaurants.length == 0) return <NoResultFoundComponent />;

  const cards = (
    <div className="flex flex-wrap">
      {filteredRestaurants &&
        filteredRestaurants.map((restaurantData, index) => {
          return (
            <Link to={`/restaurant/${restaurantData?.data?.id}`}>
              <CardComponent
                restaurant={restaurantData}
                key={restaurantData?.data?.id}
                stateNameForPassing={stateNameForPassing}
              />
            </Link>
          );
          // return <CardComponent restaurant= {data[index]}/> OR Way using index.
        })}
    </div>
  );

  return cards;
};

// OR Way
const CardContainerComponent1 = () =>
  data.map((data, index) => <CardComponent restaurant={data} />);

export default CardContainerComponent;
