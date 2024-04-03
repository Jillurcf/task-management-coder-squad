
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";





const allTasksCard = ({ tasks }) => {
  const {_id, task_image, task_name, task_category, status } = tasks;
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/alltask/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  
   return (
    <div className="">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={task_image} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl text-pink-500 font-bold">{task_name}</h1>
           <div className="flex justify-between">

         <div>  <p className="py-6 text-blue-500 font-bold text-xl">
              {task_category}
            </p></div>
         <div>   <p className="py-6 text-green-500 font-bold text-xl">{status}</p></div>
           </div>
            <div className="flex justify-between">
              
            </div>
            <div className="flex justify-between">
              <button className="btn btn-primary">
              <Link to={`/updateTask/${_id}`}> Update</Link></button>
              <button onClick={() => handleDelete(_id)}  className="btn btn-warning">Delete </button>
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




export default allTasksCard;
