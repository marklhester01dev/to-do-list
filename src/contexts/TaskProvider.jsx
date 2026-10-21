import { createContext, useState, useContext } from 'react'

const TaskContext = createContext()
const useTaskContext = () => useContext(TaskContext)
//creates a function that reads the context when a component calls it

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])

  function addTask(task) {
    setTaskList((prev) => [...prev, task])
    //pass previous state into the callback and use it to calculate the next state
  }

  function deleteTask(taskID) {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskID))
  }

  function getTaskByID(taskID) {
    return taskList.find((task) => task.id === taskID)
  }

  function updateTask(taskID, newTitle) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskID ? { ...task, title: newTitle } : task,
      ),
    )
  }

  const value = {
    taskList,
    addTask,
    deleteTask,
    getTaskByID,
    updateTask,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export { TaskProvider, useTaskContext }

//taskProvider => custom component
// taskContext => context object
// taskContext.Provider => provider belonging to the context object
