import { useState } from 'react'

import Button from '../atoms/Buttons'
import List from '../atoms/List'
import InputField from '../atoms/InputField'

import { useTaskContext } from '../../contexts/TaskProvider'

function GroupList({ id, task = '' }) {
  const { deleteTask, updateTask } = useTaskContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task)

  function handleSave() {
    const trimmedTitle = editedTitle.trim()

    if (!trimmedTitle) return

    updateTask(id, trimmedTitle)
    setIsEditing(false)
  }

  function handleCancel() {
    setEditedTitle(task)
    setIsEditing(false)
  }

  return (
    <List>
      {isEditing ? (
        <>
          <InputField
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />

          <Button type="button" onClick={handleSave}>
            Save
          </Button>

          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span id={id}>{task}</span>

          <div>
            <Button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
        
            <Button
              type="button"
              className="cursor-pointer"
              onClick={() => deleteTask(id)}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </List>
  )
}

export default GroupList
