import './App.css';
import React, {useState} from 'react';
import DisplayForm from './components/DisplayForm';
import TodoForm from './components/TodoForm';

//pair programming with Eric, Josh, Anthony, Kye, Owen

function App() {

//initializing a state variable, returning an empty array
  const[nextTodo, setNextTodo] = useState([])

  //this is receiving the new taks being created
  const addTolList = (task) =>{
    setNextTodo([...nextTodo, task])
  }

  //this is deleting the tasks that are being indicated as delete
  const deleteCurrentTask = (deleteIdx) => {
    const remove = nextTodo.filter((eachTask, Idx) => Idx !== deleteIdx)
    setNextTodo(remove)
  }

  //this is updating each task with a strikethrough
  const updateTask = (updateIdx, isChecked) => {
    const newTasks = nextTodo.map((eachTask, Idx) => {
      if (updateIdx === Idx){
        return {...eachTask, isCompleted:isChecked}
      }
      else {return eachTask}
    })
    setNextTodo(newTasks)
  }

  //
  return (
    <div className="App">
      <TodoForm newTodo={addTolList}></TodoForm>
      <DisplayForm nextTodo={nextTodo} deleteTask = {deleteCurrentTask} updateTask = {updateTask}></DisplayForm>
    </div>
  );
}

export default App;
