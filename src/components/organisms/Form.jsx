import Search from '../molecules/Search'
import { useTaskContext } from '../../contexts/TaskProvider'
import GroupList from '../molecules/GroupList'

function Form() {
  const { taskList } = useTaskContext()
  return (
    <div>
      <Search></Search>

      <ul>
        {taskList.map((task) => (
          <GroupList id={task.id} task={task.title}></GroupList>
        ))}
        {/* when implementing deleting, editing, or reordering tasks, unique task IDs are preferable to array indexes for keys. */}
        {/* The key name here is reserved by React and is never passed as a prop (the word key), React logs warning if you destructure it */}
      </ul>
    </div>
  )
}

export default Form
