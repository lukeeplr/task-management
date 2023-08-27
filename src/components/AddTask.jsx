import React, { useRef } from 'react';
import Button from './Button';
import { useGlobalContext } from './Context';


import './AddTask.css'

const AddTask = () => {

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
        
        if (!inputState) {
            console.log(`aaaaaaa ${inputRef.current}`)

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
            <input class="input-task" type="text" value={inputState} onChange={(e) => setInputState(e.target.value)} />
            <Button onClick={() => handleClick(isEditing)}>
                {isEditing ? 'edit' : 'add'}
            </Button>
        </div>
        </>
     );
}
 
export default AddTask;