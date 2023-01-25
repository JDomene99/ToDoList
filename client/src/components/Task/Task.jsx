import React, {useEffect, useState} from 'react'
import { getAllTasks } from '../../api/taskFecth'
import TaskCard from '../TaskCard/TaskCard';
function Task() {

  const [tasks, setTasks] = useState([]);
  const [id, setid] = useState([]);

  const fetchData = async () => {
    const response = await getAllTasks();
    setTasks(response);
  }
    

  useEffect(() => {
    fetchData()
  }, [tasks])

 

  return (
    <>
        {tasks.map( tasks => {
          return <TaskCard task={tasks} key={tasks._id}/>

          })
        }
          
    </>
  )
}

export default Task