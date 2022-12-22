
import { useSelector, useDispatch } from 'react-redux'
import * as slice from '../lib/Slice'
let { actions } = slice
import ToolBar from '../components/ToolBar' 
import Lister from '../components/Lister'
import { useEffect } from 'react'
import Menu from '../components/Menu'

function Index() {
  let tasks = useSelector(state=> state.data.tasks)//[{ID:1, Name:'First Task'}, {ID:2, Name:'The Second Task'}]
  const dispatch = useDispatch()
  useEffect( ()=>{
    fetch('./api/data?e=Task&a=GetRecords').then(async r=>{
      let rows = await r.json()
      dispatch( actions.setTasks( rows ) )
    })
  }, [] )

  return (
    <div className='flex p-5'>
      <Menu/>
      <div className='w-full p-1 sm:p-0 md:w-4/5 lg:w-3/5 mx-auto grid h-full overflow-y-auto' styles = 'grid-template-rows: 30px 1fr;'>
        <ToolBar className = "mb-2"></ToolBar>
        <Lister list = {tasks} columns = {['Name', 'Date', 'Status', 'Particulars']}></Lister>
      </div>
    </div>
  )
}

export default Index