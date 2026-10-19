import Button from '../atoms/Buttons'
import InputLabel from '../atoms/InputLabel'
import InputField from '../atoms/InputField'
import { useState } from 'react'
import { useTaskContext } from '../../contexts/TaskProvider'

function Search() {
  const [task, setTask] = useState('')
  const { addTask } = useTaskContext()

  function handleAdd() {
    const trimmed = task.trim()
    if (!trimmed) return // ignore empty/whitespace-only tasks
    addTask({
      id: crypto.randomUUID(),
      title: trimmed,
    })
    setTask('') // clears the input
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <InputLabel htmlFor="task" className="">
          Add task here
        </InputLabel>
        <InputField
          type="text"
          placeholder="Add task"
          name="task"
          id="task"
          className="rounded-md border px-3 py-1"
          value={task}
          onChange={(event) => setTask(event.target.value)} //event.target => HTML Element that triggered the event
        ></InputField>
      </div>

      <Button
        type="button"
        className="cursor-pointer rounded-md bg-blue-800 px-4 py-2 text-white transition-all duration-150 hover:bg-blue-800/90"
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  )
}

export default Search
