import { useRouter } from  "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from '../lib/Slice'

function Detail() {

  const dispatch = useDispatch()

  let router = useRouter()
    let {id} = router.query
    // let getTask = useSelector(state => state.data.getProductDetail) 
    let task = useSelector(state => state.data.currentTask) 
    // dispatch( actions.setTaskDetail( id ) )
    // let task = getTask(id)
    useEffect( ()=>{
      fetch('./api/data?e=Task&a=detail').then(async r=>{
        let data = await r.json()
        dispatch( actions.setTaskDetail( data ) )
      })
    }, [] )
    // let [task, setTask] = useState({})
    // useEffect(async function(){
    //   // let data = await fetch(`./api/data?e=Task&action=detail&id=${id}`).then(r=>r.json())
    //   // alert(task.Name)
    //   // dispatch( actions.setTaskDetail( data ) )
    // }, [])
    // fetch(`./api/data?e=Task&action=detail&id=${id}`).then(r=>r.json()).then(data=>{
    //   // dispatch( actions.setTaskDetail( data ) )
    //   setTask(data)
    // })
    
  return (
    <div>
      Detail of task number: {id} - {router.query.name} - {router.query.duration}
      --{task?.Status}===
    </div>
    
  )
}

export default Detail