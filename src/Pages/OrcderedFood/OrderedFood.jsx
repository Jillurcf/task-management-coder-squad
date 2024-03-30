import { useState } from "react";
import { useEffect } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderedFood = () => {
  const { user } = UseAuth();
  const [orderedFood, setOrderedFood] = useState([]);
  
  // const axiosSecure = useAxiosSecure()
  console.log(orderedFood);

  // const url = `/orderdFood?email=${user?.email}`;

  // useEffect(() => {

  //   axiosSecure.get(url)
  //   .then(res=> setOrderedFood(res.data))
  // }, [url, axiosSecure]);

  useEffect(() => {
    if (user) {
      // console.log(email);
      fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/purchase/food/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrderedFood(data));
    }
  }, [user]);


  const handleDelete = id =>{
  

     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
             
     fetch(`https://assignment11-server-side-chi.vercel.app/api/v1/purchase/delete/${id}`, {
      method: 'DELETE'
           
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
              const remining = orderedFood.filter(food => food._id !== id)
              setOrderedFood(remining)
            }
          });
      }
    });




 }

  return (
    <div>
        <Helmet>
        <title>FoodHero | My Order</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MDH6Zfh/oredered-Item.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md max-w-xs">
            <h1 className="text-blue-600 font-bold text-2xl mb-4">My Order History</h1>
         
            <div className="overflow-x-auto">
              <table className="table table-xs">
               
                {/* head */}
                <thead className="text-white">
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                
                    <th>Food Image</th>
                    <th>Food Name</th>
                    <th>Price</th>
                    <th>Added Time</th>
                    <th>Food Owner</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    orderedFood.map(food=> 
                        <tr key={food._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={food.foodImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                     
                    </td>
                    <td>
                    {food.foodName}
                    
                    </td>
                    <td> ${food.price}</td>
                    <td>{user?.metadata.lastSignInTime}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">{user?.displayName}</button>
                    </th>
                    <th>
                      <button onClick={()=>handleDelete(food._id)} className="btn btn-ghost btn-xs">X</button>
                    </th>
                  </tr>
                        )
                  }
                </tbody>
                
              </table>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedFood;
