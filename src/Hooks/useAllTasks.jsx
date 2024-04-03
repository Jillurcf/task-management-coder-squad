

import { useEffect, useState } from 'react';


const useAllTasks = () => {
    const [allTasks, setAllTasks] = useState([])
    console.log(allTasks);
    useEffect(()=>{
        fetch('http://localhost:5000/newTasks')
        .then(res=> res.json())
        .then(data=> setAllTasks(data))
      
    },[])
    return allTasks;
}

export default useAllTasks;