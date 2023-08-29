import React from 'react';
import Task from './Task';
import { useGlobalContext } from './Context';

const Tasks = () => {

    const {tasks} = useGlobalContext()

    if (tasks.length === 0) {
        return (
            <p className='no-tasks'>Nada pra fazer agora...</p>
        )
    }
    
    return ( 
            <>
            {tasks.map( (task) => <Task task={task}/> )}
            </>
         );
    }
 
export default Tasks;