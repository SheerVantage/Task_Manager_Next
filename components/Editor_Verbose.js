import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTask, setTaskName, setTaskDuration, setTaskParticulars, setTaskStatus } from '../lib/Slice'

function Editor(props) {

  let task = useSelector( state => state.data.currentTask )

  const dispatch = useDispatch()
  function updateName(e){
    // setItem(e.target.value)
    dispatch(setTaskName(e.target.value))
  }
  function updateDuration(e){
    dispatch(setTaskDuration(e.target.value))
  }
  function updateParticulars(e){
    dispatch(setTaskParticulars(e.target.value))
  }
  function updateStatus(e){
    dispatch(setTaskStatus(e.target.value))
  }
  function updateTask(){
    dispatch(setTask(task))
  }


  return (
    <div className="bg-gray-100 flex flex-col gap-2 p-2 pc-1">
        <input value = {task.Name} onChange = {updateName} />
        <input value = {task.Duration} onChange = {updateDuration} />
        <input value = {task.Status} onChange = {updateStatus} />
        <textarea value = {task.Particulars} onChange = {updateParticulars} ></textarea>
        <button className = "p-3 bg-blue-400" onClick = {updateTask}>Update</button>
    </div>
  )

}

export default Editor