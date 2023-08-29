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
        setEditId,
        setAlert,
    } = useGlobalContext()

    const handleClick = (isEditing) => {

        let message = ''
        
        inputRef.current.className = 'input-task' 
        if (!inputState) {
            message = 'informe uma tarefa'
            inputRef.current.className = 'input-task input-empty'

        } else if (inputState && isEditing) {
            message = 'tarefa editada'
            handleEditingProcess(editId)
            setIsEditing(false)
            setEditId(null)

        } else {
            message = 'tarefa adicionada'
            handleTaskAddition(inputState)
            
        }
        setAlert({active: true, msg: message})
        setInputState('')
    }

    return ( 
        <>
        <div className="add-task-container">
            <input class="input-task" type="text" value={inputState} ref={inputRef} onChange={(e) => setInputState(e.target.value)} />
            <Button onClick={() => handleClick(isEditing)}>
                {isEditing ? 'editar' : 'adicionar'}
            </Button>
        </div>
        </>
     );
}
 
export default AddTask;