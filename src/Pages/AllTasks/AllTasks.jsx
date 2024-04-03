import { Helmet } from "react-helmet-async";

import AllTasksCard from "./AllTasksCard";
import { useEffect, useState } from "react";
import "./AllTasks.css";
import UseAuth from "../../Hooks/UseAuth";

const AllTasks = () => {


  const [allTasks, setAllTasks] = useState([]);
  const [item, setItem] = useState(null)
  console.log(allTasks);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const { loading } = UseAuth();

  console.log(count);

  const numberOfPages = Math.ceil(count / itemsPerPage);

  // instead of forEach
  const pages = [...Array(numberOfPages).keys()];

  console.log(pages);

  useEffect(() => {
    fetch("https://task-management-coder-squad-server.vercel.app/allTaskCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);
  console.log(pages);

  useEffect(() => {
    fetch(
      `https://task-management-coder-squad-server.vercel.app/newTasks?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllTasks(data));
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    console.log(val);
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const HandleSearch = () => {
    const itemCategory = allTasks.filter(
      (tasks) => tasks.task_name === item
    );

    setAllTasks(itemCategory);
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <div className="">
      <Helmet>
        <title>TM | All Tasks</title>
      </Helmet>

      <div className="bg-blue-900 h-[300px] w-full">
        <h1 className="text-center md:text-6xl text-2xl font-bold text-white pt-36 ">
          All Tasks
        </h1>
        <p className="text-center text-white">
         Task management is very importan to us
        </p>
      </div>
      <div className="w-full h-[100px] py-4 bg-blue-900 lg:flex">
        <div className="form-control flex mx-auto">
          <div className="input-group">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search by Task Name"
              className="input input-bordered"
            />
            <button
            onClick={HandleSearch}
            className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-24">
        {allTasks.map((tasks) => (
          < AllTasksCard key={tasks._id} tasks={tasks}></ AllTasksCard>
        ))}
      </div>
      <div className="pagination">
        <p>Current page: {currentPage}</p>
        <button onClick={handlePreviousPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllTasks;
