import Button from '../atoms/Buttons'
import List from '../atoms/List'
import { useTaskContext } from '../../contexts/TaskProvider'
function GroupList({ id = null, task = '' }) {
  const { deleteTask } = useTaskContext()
  return (
    <List>
      <span id={id}>{task}</span>

      <div>
        <Button type="button">Edit</Button>
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
