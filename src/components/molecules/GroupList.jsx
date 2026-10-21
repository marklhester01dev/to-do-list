import Button from '../atoms/Buttons'
import List from '../atoms/List'

import { useTaskContext } from '../../contexts/TaskProvider'

function GroupList({ id, task = '' }) {
  const { deleteTask, editTask } = useTaskContext()

  return (
    <List>
      <span id={id}>{task}</span>

      <div>
        <Button type="button" onClick={() => editTask(id)}>
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
    </List>
  )
}

export default GroupList
