import { TaskProvider } from '../contexts/TaskProvider'
import Form from '../components/organisms/Form'
function ToDo() {
  return (
    <TaskProvider>
      <Form></Form>
    </TaskProvider>
  )
}

export default ToDo
