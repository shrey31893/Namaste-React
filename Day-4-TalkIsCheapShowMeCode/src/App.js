import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";

/**
 * react gives us easier way for importing
 * import CardComponent from "./CardComponent.js"; - good
 * import CardComponent from "./CardComponent"; -- also works without js.
 * but with extension is good as at some place name is there but with different extension like json,css.
 */

const data = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nlojoe2zxhshjzzx4fte",
    name: "La pinoz pizza",
    cusine: "Italian",
    stars: 3.5,
    id: 1
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vyba6leelnfvb7pymrzl",
    name: "Barbequee nations",
    cusine: "Barbequee",
    stars: 4.5,
    id: 1
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ddfimgjeaos4s6s43mbb",
    name: "frankie nations",
    cusine: "frankie",
    stars: 4,
    id: 1
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xoyfoihyn0q2ecvw79gc",
    name: "salad.com",
    cusine: "salad",
    stars: 3,
    id: 1
  },
];

const title = "Hunger Hub";

const HeadingComponent = () => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

// const BodyComponent = () => (
//   <div className="Card-Container">
//     <CardComponent restaurant={data[0]} xyz={1} />
//     {/* this restaurant and xyz would receive inside  CardComponent as a default arguments. */}

//     {/*
//     // object creation of props
//     const props = {
//         restaurant : data[0]
//     };
//     cardcomponent(props); //function call.

//     Remember that React.createElement("h1", {},"") - this second parameter is props.

//     this is same as -- React.createElement("CardComponet", {restaurant: data[0], xyz:1}, "");
//     */}
//     <CardComponent restaurant={data[1]}/>
//     <CardComponent restaurant={data[2]}/>
//     <CardComponent restaurant={data[3]}/>
//   </div>
// );

const CardContainer = () => {
  const cards = data.map((restaurantData, index) => {
    return <CardComponent restaurant={restaurantData} key= {restaurantData.id} />;
    // return <CardComponent restaurant= {data[index]}/> OR Way using index.
  });
  return cards;
};

const CardContainer1 = () => data.map((data,index) => (<CardComponent restaurant={data}/>));

const BodyComponent = () => (
  <div className="Card-Container">
    <CardContainer />
  </div>
);

const AppLayoutComponent = () => {
  return (
    <>
      <HeadingComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
