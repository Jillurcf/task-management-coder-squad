

import { useEffect, useState } from 'react';


const useAllTasks = () => {
    const [allTasks, setAllTasks] = useState([])
    console.log(allTasks);
    useEffect(()=>{
        fetch('https://task-management-coder-squad-server.vercel.app/newTasks')
        .then(res=> res.json())
        .then(data=> setAllTasks(data))
      
    },[])
    return allTasks;
}

export default useAllTasks;