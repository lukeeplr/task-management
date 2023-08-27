import React, { useContext, useEffect, useState } from 'react';
import { stringify, v4 as uuidv4} from 'uuid'


const AppContext = React.createContext()

const getLocalStorage = () => {
  let list = localStorage.getItem('tasks')
  if (list) {
    return JSON.parse(localStorage.getItem('tasks'))
  } else {
    return []
  }
}

export const AppProvider = ({ children }) => {

    const [tasks, setTasks] = useState(getLocalStorage())

      const [inputState, setInputState] = useState('')
      const [isEditing, setIsEditing] = useState(false)
      const [editId, setEditId] = useState(null)


      const handleTaskAddition = (task) => {
        setTasks (tasks => {
          return [...tasks, {
            id: uuidv4(),
            title: task,
            completed: false
          }]
        })
      }
    
      const handleTaskClick = (taskId) => {
        setTasks( (tasks) => {
          return tasks.map( (task) => {
            if (task.id === taskId) return {...task, completed: !task.completed}
            return task
          })
        })
    
      }
    
      const handleTaskDeletion = (e, taskId) => {
        e.stopPropagation()
        setTasks( (tasks) => {
          return tasks.filter( task => task.id !== taskId)
        })
    
      }

      const handleTaskEdition = (e, taskId) => {
        e.stopPropagation()
        setIsEditing(true)
        setEditId(taskId)
        const specific = tasks.find(item => item.id === taskId)
        setInputState(specific.title)
      }

      const handleEditingProcess = (taskId) => {
        setTasks(tasks.map(item => {
            if (item.id === taskId) {
                return {...item, title:inputState}
            }
        return item
        }))
      }

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }, [tasks])

    return (
        <AppContext.Provider
        value={{
            tasks,
            setTasks,
            inputState, 
            setInputState,
            isEditing, 
            setIsEditing,
            editId,
            setEditId,
            handleTaskAddition,
            handleTaskClick,
            handleTaskDeletion,
            handleTaskEdition,
            handleEditingProcess
        }}>
            {children}
        </AppContext.Provider>
    )
}
 

export const useGlobalContext = () => {
    return useContext(AppContext)
}