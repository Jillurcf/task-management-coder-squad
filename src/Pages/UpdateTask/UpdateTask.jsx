import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateTask = () => {
  const task = useLoaderData();
  console.log(task);
const {user} = UseAuth()
const {id} = useParams()

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
    const task_name = form.taskName.value;
    const task_image = form.image.value;
    const task_category = form.category.value;
    const userName = form.userName.value;
    const email = form.userEmail.value;
    const description = form.description.value;
    const status = form.status.value

      
    
        const updateTask = {
          task_name,
          task_image,
          task_category,
          userName,
          email,
          description,
          status
        };
        console.log(updateTask);
    
        axios.put(
          `https://task-management-coder-squad-server.vercel.app/alltask/${id}`,
          updateTask,
          { withCredentials: true }
        )
        .then(res=> {
          console.log(res.data);
        })
        Swal.fire("Task Updated");
      
      };
    
    return (
        <div>
          <Helmet>
        <title>FoodHero | Update Fodd</title>
      </Helmet>
               <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZNXWRjT/Update.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <form onSubmit={handleUpdate} className=" mt-36 card-body">
                    <h1 className="text-2xl font-bold">Update Food</h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Name</span>
                      </label>
                      <input
                        type="text"
                        name="taskName"
                        defaultValue={task.food_name}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Image</span>
                      </label>
                      <input
                        type="text"
                        name="image"
                        defaultValue={task.food_image}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Category</span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        defaultValue={task.food_category}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Added By</span>
                      </label>
                      <input
                        type="text"
                        name="userName"
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                        required
                      />
                      <input
                        type="text"
                        name="userEmail"
                        defaultValue={user?.email}
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Short Description</span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        defaultValue={task.description}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Status</span>
                      </label>
                      <input
                        type="text"
                        name="status"
                        defaultValue={task.status}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Update Task</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateTask;