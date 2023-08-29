import React, { useRef } from 'react';
import Button from './Button';
import { useGlobalContext } from './Context';


import './AddTask.css'

const AddTask = () => {

    const inputRef = useRef()

    const {
        handleTaskAddition,
        inputState, 
        setInputState, 
        isEditing,
        handleEditingProcess,
        setIsEditing, 
        editId, 
        setEditId
    } = useGlobalContext()

    const handleClick = (isEditing) => {
        
        inputRef.current.className = 'input-task' 
        if (!inputState) {
            inputRef.current.className = 'input-task input-empty'

        } else if (inputState && isEditing) {
            handleEditingProcess(editId)
            setIsEditing(false)
            setEditId(null)
            setInputState('')

        } else {
            handleTaskAddition(inputState)
            setInputState('')
        }
    }

    return ( 
        <>
        <div className="add-task-container">
            <input class="input-task" type="text" value={inputState} ref={inputRef} onChange={(e) => setInputState(e.target.value)} />
            <Button onClick={() => handleClick(isEditing)}>
                {isEditing ? 'edit' : 'add'}
            </Button>
        </div>
        </>
     );
}
 
export default AddTask;