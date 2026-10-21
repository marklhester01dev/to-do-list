import Button from '../atoms/Buttons'
import InputLabel from '../atoms/InputLabel'
import InputField from '../atoms/InputField'

import { useState, useEffect } from 'react'
import { useTaskContext } from '../../contexts/TaskProvider'

function Search() {
  const [task, setTask] = useState('')

  const { editingID, addTask, editTask, updateTask, setEditingID } =
    useTaskContext()

    //use effect runs after the state of the editing ID is updated
  useEffect(() => {
    if (editingID === null) return

    const selectedTask = editTask(editingID)
    //stores the task to be edited
    // {id: ..., title: ...}

    if (selectedTask) {
      setTask(selectedTask.title)
    }
  }, [editingID])
  //editing ID is the dependency state, holds the current id of the selected task

  function handleSubmit() {
    const trimmed = task.trim()

    if (!trimmed) return

    if (editingID !== null) {
      updateTask(editingID, trimmed)
      //if the editing id is true
      // the edit button set's the state of this to true
    } else {
      addTask({
        id: crypto.randomUUID(),
        //generate a random id (unique per id)
        title: trimmed,
      })
      //if null, add to the task
    }

    setTask('')
  }

  function handleCancel() {
    setTask('')
    //resets the task input
    setEditingID(null)
    //since this is cancel, the editing mode will be equal to null
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <InputLabel htmlFor="task">Add task here</InputLabel>

        <InputField
          type="text"
          placeholder="Add task"
          name="task"
          id="task"
          className="rounded-md border px-3 py-1"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </div>

      <Button
        type="button"
        className="cursor-pointer rounded-md bg-blue-800 px-4 py-2 text-white"
        onClick={handleSubmit}
      >
        {editingID !== null ? 'Update' : 'Add'}
      </Button>

      {editingID !== null && (
        <Button type="button" onClick={handleCancel}>
          Cancel
        </Button>
      )}
    </div>
  )
}

export default Search
