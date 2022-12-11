// This is basically just a module
// module is nothing just JS file.
// which exist independently on its own.
// we can re-use this component
// we always need to export that for the same.

const CardComponent = ({ restaurant }) => {
  console.log("in card restaurant", restaurant);
  //known as early return
  if (!restaurant && !restaurant?.data || restaurant.length == 0) return null;

  // console.log(props.restaurant.data);
  const resto = restaurant.data;
  console.log("resto", resto);
  const { cloudinaryImageId, name, cuisines, avgRating } = resto;
  return (
    <div id="card" className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

//HW - why I write export default?
export default CardComponent;
