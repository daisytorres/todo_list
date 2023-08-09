import React, {useState} from 'react'

const DisplayForm = (props) => {
const deleteNewTask = (Idx) =>{
    props.deleteTask(Idx)
}

const makeComplete = (Idx, isChecked) => {
    props.updateTask(Idx, isChecked)
}

    return (
        <div style = {{display: "in-flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 20}}>
            
            {props.nextTodo.map((eachTask, Idx) => {

                return (
                    <div style = {{background: "pink", height: 100, width: 100, margin:20}}> 

                    {eachTask.isCompleted?<p style={{textDecoration:'line-through'}}>{eachTask.todo}</p>:<p>{eachTask.todo}</p>}

                    <input type ="checkbox" checked = {eachTask.isCompleted} onChange={(e) => makeComplete (Idx, e.target.checked)} />
                    <button onClick = {() => deleteNewTask(Idx)}> Delete</button>
                    </div>
                )
            }
            )
            }
            </div>
    )
}
export default DisplayForm