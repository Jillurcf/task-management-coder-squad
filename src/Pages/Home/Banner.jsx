import { useState } from "react";
import useAllFood from "../../Hooks/useAllFood";
import HomeAllFoodCard from "./HomeAllFoodCard";
import UseAuth from "../../Hooks/UseAuth";

const Banner = () => {
  const allFood = useAllFood();
 
  const [isShow, setIsShow] = useState(false);
  const {isLoading} = UseAuth();
  if(isLoading){
    return <progress className="progress w-56"></progress>
  }
  return (
    <div>
      {/* <h1 className='text-6xl font-bold text-blue-600 text-center'>All Food</h1> */}
      <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white py-12 ">
        Add a Task
        </h1>
        <div className="max-w-[300px] mx-auto flex justify-between">
          <div>
            
          <button className="btn btn-outline btn-warning">Add new tasks</button>
          </div>
          <div><button className="btn btn-outline btn-secondary">View All tasks</button></div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Banner;
