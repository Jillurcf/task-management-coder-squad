
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const Banner = () => {
  
  const {isLoading} = UseAuth();
  if(isLoading){
    return <progress className="progress w-56"></progress>
  }
  return (
    <div>
      
      <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white py-12 ">
       Tasks Management Application
        </h1>
        <div className="max-w-[600px] mx-auto flex justify-evenly">
          <div>
            
          <Link to="/addTask"><button className="btn btn-outline btn-warning">Add new tasks</button></Link>
          </div>
          <div>
           <Link to="/allTasks"> <button className="btn btn-outline btn-secondary">Ongoing Tasks</button></Link>
            </div>
          <div>
           <Link to="/allTasks"> <button className="btn btn-outline btn-success">Finished Tasks</button></Link>
            </div>
          <div>
           <Link to="/allTasks"> <button className="btn btn-outline btn-accent">View All tasks</button></Link>
            </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Banner;
