import { useEffect } from "react";

const BodyComponent = () => {
  // const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // hooks are nothing but a function.
  // use effect 1st argument accept a function.
  // when my COMPONENT is rendered it will be called.
  useEffect(() => {
    /**
     * step -1 - render my body component with []
     * step - 2 make a api call
     * step - 3 set that api data result into filteredRestaurants.
     */
    console.log("hello world"); //debug and check, when it is rendered.
    fetchData();
  }, []);

  // [] - effect render just once. after my component render. render the component and apply the effect. same as not putting any second argument.
  // what if I want to  keep calling effect every time my varialbe/state/filteredRestaurant chagnes
  // so we are subscribing to that change. react takes care of it.

  // can we have multiple useEffect - yes and we should have.

  // use effect use case - 1
  // this means only for first render.
  useEffect(() => {
    fetchData();
  }, []);

  // use effect use case - 2
  // this means - do changes any time my filtered restaurants changes.
  // consider, 2nd argument as a subscription.
  useEffect(() => {
    fetchData();
  }, [filteredRestaurants]);

  // next question is - in what order useEffect called if multiple useEffects were written in code.
  // answer - never never rely on that order. never write code wherein your order matters, because
  // you never know what react do inside. as it do lot of optimization as react do sometimes batches and all those stuff.

  // hooks are just came to react. before that it was a class component.
  // and it was so amazing.
  // if you want to implement this in a vanilla JS, you pull your hair.

  // always try to use, functional component. (if your react version supports then)

  // CORS explanation. HW.

  //chrom extension - allow cors. - install it.

    return (
    <div className="Card-Container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filteredRestaurants={filteredRestaurants} />
    </div>
  );
};

async function fetchData() {}
