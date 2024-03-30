import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const HomeAllFoodCard = ({food}) => {
    const {_id, food_image, food_name, food_category, count, price, quantity } = food;
    const [presentCount, setPresentCount] = useState(0)
  // const id = useParams()
    // const upcount = parseInt(presentCount)

      const handleCount = (id)=>{      const updateCount = count + 1;
      setPresentCount(updateCount)
      axios.put(`https://assignment11-server-side-chi.vercel.app/api/v1/allFood/update/${id}`, {count: updateCount}, { withCredentials: true }
      )
      .then(res=> {
        console.log(res.data);
      })
      // Swal.fire("Food Updated");

    }
    return (
        <div>
                <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={food_image}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl text-pink-500 font-bold">{food_name}</h1>
            <div className="flex justify-evenly">
            <p className="py-6 text-blue-500 font-bold text-xl">
              {food_category}
            </p>
            <p className="py-6 text-blue-500 font-bold text-xl">
              Count: {count}
            </p>
            </div>
            <div className="flex justify-between">
                <button className="btn btn-xs bg-blue-500 text-white">Price: ${price}</button>
                <button className="btn btn-xs btn-outline border-pink-500">Quantity: {quantity}</button>
            </div>
            <button onClick={()=>handleCount(_id)} className="mt-12 btn btn-outline btn-secondary font-bold mx-auto flex w-full"><Link to={`/seeDetail/${_id}`}>See Details</Link></button>
          </div>
          <button>Purchase</button>
        </div>
      </div>
        </div>
    );
};

export default HomeAllFoodCard;