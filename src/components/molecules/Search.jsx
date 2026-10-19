import Button from '../atoms/Buttons'
import InputLabel from '../atoms/InputLabel'
import InputField from '../atoms/InputField'

function Search() {
  return (
    <div>
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
        ></InputField>
      </div>

      <Button type="button" className="bg-blue">Add</Button>
    </div>
  )
}

export default Search
