import './App.css';
import React, {useState} from 'react';
import DisplayForm from './components/DisplayForm';
import TodoForm from './components/TodoForm';

//pair programming with Eric, Josh, Anthony, Kye, Owen

function App() {

  const[nextTodo, setNextTodo] = useState([])
  const addTolList = (task) =>{
    setNextTodo([...nextTodo, task])
  }
  const deleteCurrentTask = (deleteIdx) => {
    const remove = nextTodo.filter((eachTask, Idx) => Idx !== deleteIdx)
    setNextTodo(remove)
  }

  const updateTask = (updateIdx, isChecked) => {
    const newTasks = nextTodo.map((eachTask, Idx) => {
      if (updateIdx === Idx){
        return {...eachTask, isCompleted:isChecked}
      }
      else {return eachTask}
    })
    setNextTodo(newTasks)
  }


  return (
    <div className="App">
      <TodoForm newTodo={addTolList}></TodoForm>
      <DisplayForm nextTodo={nextTodo} deleteTask = {deleteCurrentTask} updateTask = {updateTask}></DisplayForm>
    </div>
  );
}

export default App;
