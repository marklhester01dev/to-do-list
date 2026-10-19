import Button from '../atoms/Buttons'
import List from '../atoms/List'
function GroupList({ id = null, task = '' }) {
  return (
    <List>
      <span id={id}>{task}</span>

      <div>
        <Button type="button">Edit</Button>
        <Button type="button">Delete</Button>
      </div>
    </List>
  )
}

export default GroupList
