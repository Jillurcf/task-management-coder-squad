
import { Link } from "react-router-dom";

const AllFoodCard = ({ food }) => {
  const {_id, food_image, food_name, food_category, price, quantity, count } = food;

   return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={food_image} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl text-pink-500 font-bold">{food_name}</h1>
            <p className="py-6 text-blue-500 font-bold text-xl">
              {food_category}
            </p>
            <div className="flex justify-between">
              <button className="btn btn-xs bg-blue-500 text-white">
                Price: ${price}
              </button>
              <button className="btn btn-xs btn-outline border-pink-500">
                Quantity: {quantity}
              </button>
            </div>
            <button 
          
            className="mt-12 btn btn-outline btn-secondary font-bold mx-auto flex w-full">
             <Link to={`/seeDetail/${_id}`}> See Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodCard;
