import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartSlice.js";

const FoodItemComponent = ({ items, isFromCart }) => {
  console.log("items", items);
  const { name, category, description, cloudinaryImageId, price } = items;
  const dispatch = useDispatch();
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">₹{price / 100}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">{category}</p>

          <div className="flex">
            {!isFromCart ? (
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => {
                  dispatch(addItem(items));
                }}
              >
                add
              </button>
            ) : (
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => {
                  dispatch(deleteItem());
                }}
              >
                remove
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
export default FoodItemComponent;
