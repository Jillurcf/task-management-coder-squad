import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const SeeDetail = () => {
  const seeDetails = useLoaderData();
  const [presentCount, setPresentCount] = useState(0)
  const id = seeDetails._id;
  console.log(id);
  console.log(seeDetails);

  const handleCount = id =>{
    const presentQuantity = seeDetails.count + 1
    setPresentCount(presentQuantity)
  }
  return (
    <div>
      <Helmet>
        <title>FoodHero | See Detail</title>
      </Helmet>
 
        {/* { <Purchase seeDetails={seeDetails}></Purchase>} */}
        
            <div className="card  glass">
            <figure>
              <img src={seeDetails.food_image} alt="car!" />
            </figure>
            <div className="flex justify-evenly">
              <div className="card-body">
                <h2 className="card-title">{seeDetails.food_name}</h2>
                <p>{seeDetails.food_category}</p>
                <p>Price: ${seeDetails.price}</p>
                <p className="text-blue-600">Count: {seeDetails.count}</p>
              </div>
              <div className="card-body">
                <p> Added By: {seeDetails.added_by}</p>
                <p>Origin: {seeDetails.food_origin_country}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="text-center">{seeDetails.description}</p>
            </div>
            <div className="absolute top-[50%] left-[50%] card-actions justify-center">
              <button className="btn btn-secondary  lg:w-96">
              {
            seeDetails.quantity == 0 ? "no food available"
            :
                <Link to={`/purchasePage/${id}`}>Order now!</Link>
              }
              </button>
            </div>
            <div className="mb-6 card-actions justify-center">
             
                <button onClick={handleCount} className="btn btn-secondary">
                {
            seeDetails.quantity == 0 ? "no food available"
            :
                <Link to={`/purchasePage/${id}`}>Order now!</Link>
}
              </button>
    
           
            </div>
          </div>
        
     
    </div>
  );
};

export default SeeDetail;
