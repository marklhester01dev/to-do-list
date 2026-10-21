import { createContext, useState, useContext } from 'react'

const TaskContext = createContext()

const useTaskContext = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])
  const [editingID, setEditingID] = useState(null)

  function addTask(task) {
    setTaskList((prev) => [...prev, task])
  }

  function deleteTask(taskID) {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskID))

    if (editingID === taskID) {
      setEditingID(null)
    }
  }

  function editTask(taskID) {
    const selectedTask = taskList.find((task) => task.id === taskID)

    if (!selectedTask) return

    setEditingID(selectedTask.id)

    return selectedTask
  }

  function updateTask(taskID, newTitle) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskID ? { ...task, title: newTitle } : task,
      ),
    )

    setEditingID(null)
  }

  const value = {
    taskList,
    editingID,
    setEditingID,
    addTask,
    deleteTask,
    editTask,
    updateTask,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export { TaskProvider, useTaskContext }
