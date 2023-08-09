import React, {useState} from 'react'



const TodoForm = (props) => {
    const [todo, setTodo] = useState("")

    //this is handling the form behavior of going to a new page
    const handleSubmit = (e) => {
        e.preventDefault()
        const tasks = {todo, isCompleted: false}
        props.newTodo (tasks)
        setTodo("")
    }

    //this is handling the update/input of the list
    const updateTodo = (e) => {
        //e.preventDefault(); not needed because we are going to create issues
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

//can also be <form on Submit={handleSubmit}>
//and remove it from the button.
//Button can be <button type ="submit">
//NOTE: do not do <input type ="button">