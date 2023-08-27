import React from 'react';
import Task from './Task';
import { useGlobalContext } from './Context';

const Tasks = () => {

    const {tasks} = useGlobalContext()

    return ( 
        <>
        {tasks.map( (task) => <Task task={task}/> )}
        </>
     );
}
 
export default Tasks;