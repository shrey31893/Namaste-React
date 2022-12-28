import { useSelector } from "react-redux";
import FoodItemComponent from "./FoodItemComponent";
import NoItemInCartComponent from "./NoItemInCartComponent";

const CartComponent = () => {
  const select = useSelector((store) => store.cart.value);
  console.log(select);
  if (select.length == 0) return <NoItemInCartComponent />;

  return (
    <>
      <h1>welcome to cart page.</h1>
      <div>
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {select.map((item) => {
                console.log(item);
                return <FoodItemComponent items={item} isFromCart={true} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
