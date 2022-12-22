import { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from '../lib/Slice'
import useInputManager from "../lib/useInputManager"

function Editor(props) {
  const dispatch = useDispatch()
  let task = useSelector( state => state.data.currentTask)

  function updateTask(e){
    if(e.target.attributes.field && e.target.attributes.field.value){
      dispatch(actions.updateTask({field:e.target.attributes.field.value, value: e.target.value}))
    }
    else{
      if(isValied())
        dispatch( actions.setTask(task) )
    }
  }

  let [editing, setEditing] = useState(false)
  let taskName = useRef()
  let taskDuration = useRef()
  useEffect(()=>{
    //taskName.current?.select()
  })

  function isValied(){
    let valid = true
    
    if(!taskName.current.value){
      taskName.current.style.backgroundColor = 'lightpink'
      valid = false
    }
    else{
      taskName.current.style.backgroundColor = ''
    }

    if(!taskDuration.current.value){
      taskDuration.current.style.backgroundColor = 'lightpink'
      valid = false
    }
    else{
      taskDuration.current.style.backgroundColor = ''
    }
    return valid
  }

  function addTask(){
    if(editing){
        if(isValied()){
          dispatch( actions.setTask( task ) )
          setEditing( false )
        }
      }
      else {
        dispatch( actions.addTask() )
        setEditing(true)
      }
  }

  return (
    <div className="bg-gray-100 mb-3 flex flex-col gap-1 p-3 rounded-md shadow-md pcx-1 bc-1">
      <input ref = {taskName} className="text-3xl pb-1" value = {task.Name} field = "Name" onChange = {updateTask} placeholder="title" />
      <div className="p-0" style = { { display:'grid', gridTemplateColumns: '1fr 3fr', gap:'5px' } }>
        <div className="pcx-1 flex flex-col gap-1">
          <input ref = {taskDuration} value = {task.Duration} field = "Duration" placeholder="duration" onChange = {updateTask} />
          <input value = {task.Status} field = "Status" onChange = {updateTask} placeholder="status" />
        </div>
        <textarea className="px-1" value = {task.Particulars} field = "Particulars" onChange = {updateTask} placeholder="particulars" ></textarea>
      </div>
      <div className="p-0 flex gap-1">
        <button className = "p-1 px-2 bg-blue-400 cursor-pointer" onClick = {updateTask}>Update</button>
        <button className = "p-1 px-2 bg-blue-400 cursor-pointer" onClick = {addTask}>{editing ? 'Save' : 'Add'}</button>
      </div>
    </div>
  )

}

export default Editor