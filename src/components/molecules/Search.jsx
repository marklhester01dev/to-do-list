import Button from '../atoms/Buttons'
import InputLabel from '../atoms/InputLabel'
import InputField from '../atoms/InputField'

import { useState, useEffect } from 'react'
import { useTaskContext } from '../../contexts/TaskProvider'

function Search() {
  const [task, setTask] = useState('')

  const { editingID, addTask, editTask, updateTask, setEditingID } =
    useTaskContext()

  useEffect(() => {
    if (editingID === null) return

    const selectedTask = editTask(editingID)

    if (selectedTask) {
      setTask(selectedTask.title)
    }
  }, [editingID])

  function handleSubmit() {
    const trimmed = task.trim()

    if (!trimmed) return

    if (editingID !== null) {
      updateTask(editingID, trimmed)
    } else {
      addTask({
        id: crypto.randomUUID(),
        title: trimmed,
      })
    }

    setTask('')
  }

  function handleCancel() {
    setTask('')
    setEditingID(null)
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
