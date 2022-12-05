// This is basically just a module
// module is nothing just JS file.
// which exist independently on its own.
// we can re-use this component 
// we always need to export that for the same.

const CardComponent = (props) => {
  console.log(props);
  const resto = props.restaurant;
  const {img,name,cusine,stars} = resto;
  return (
    <div id="card" className="card">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cusine}</h3>
      <h4>{stars} stars</h4>
    </div>
  );
};
//HW - why I write export default?
export default CardComponent;



