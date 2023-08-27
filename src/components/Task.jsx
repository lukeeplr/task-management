import React from 'react';
import { AiOutlineEdit, AiOutlineClose } from 'react-icons/ai'
import './Task.css'
import { useGlobalContext } from './Context';

const Task = ( { task }) => {

    const { handleTaskClick, handleTaskDeletion, handleTaskEdition } = useGlobalContext() 

    return ( 
        <>
            <div className={`task-item ${task.completed ? "completed" : ""}`}
            onClick={() => handleTaskClick(task.id)}
            >{task.title}
            <div className="task-buttons">
                <AiOutlineEdit onClick={(e) => handleTaskEdition(e, task.id)}/> 
                <AiOutlineClose onClick={(e) => handleTaskDeletion(e, task.id)}/>
            </div>
            </div>
        </>
     );
}
 
export default Task;