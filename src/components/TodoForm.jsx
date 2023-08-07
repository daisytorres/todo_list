import React, {useState} from 'react'



const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const tasks = {todo, isCompleted: false}
        props.newTodo (tasks)
        setTodo("")
    }
    const updateTodo = (e) => {
        setTodo(e.target.value)
    }



  return (
    <div>
        <form action="">
            <label>To Do List:</label>
            <input type="text" name= "todo" onChange = {updateTodo} value={todo}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default TodoForm