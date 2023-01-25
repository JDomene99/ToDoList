import React from "react";
import { deleteTask, editTask } from "../../api/taskFecth";
import { useNavigate } from "react-router-dom";



function TaskCard({ task }) {

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await deleteTask(id)
            console.log(response)
    
        } catch (error) {
            console.log(error);
        }
        
    }

    // const handleEdit = async (id) => {
    //     try {
    //         const response = await editTask(id)
    //         console.log(response)
    
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }



  return (
    <div>
     
        <h2>{task.title}</h2>
       
      <p>{task.description}</p>
      {task.done ? "✅" : "❌"}
      <button
      onClick={ () => handleDelete(task._id)}>
        Delete</button>

      <button
      onClick={ () => navigate(`/edit/${task._id}`)}>
    Update</button>
    </div>
  );
}

export default TaskCard;
