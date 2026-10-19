import Button from '../atoms/Buttons'
import List from '../atoms/List'
function GroupList() {
  return (
    <ul>
      <List>
        <span>Hello World</span>

        <div>
          <Button type="button">Edit</Button>
          <Button type="button">Delete</Button>
        </div>
      </List>
    </ul>
  )
}

export default GroupList
