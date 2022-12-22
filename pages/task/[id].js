// import { useRouter } from  "next/router"
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { actions } from '../../lib/Slice'

import Menu from "../../components/Menu"

function Task() {

  // const dispatch = useDispatch()
  // let router = useRouter()
  // let task = useSelector(state => state.data.currentTask) 

  // useEffect( ()=>{
  //   // if(!router.query.id) return
  //   // let {id} = router.query
  //   // console.log(router.query)
  //   //   fetch('../api/data?e=Task&a=GetRecord&id='+id).then(async r=>{
  //   //     let data = await r.json()
  //   //     dispatch( actions.setTaskDetail( data ) )
  //   //   })
  // }, [] )
    
  return (
    <div className='flex p-5'>
      <Menu activeLink = 'task'/>
      <div>
        {/* Detail of task number: {task.ID} - {router.query.name} - {router.query.duration}
        --{task.Status}=== */}
        All bout the task here ==============
      </div>
    </div>
  )
}

export default Task