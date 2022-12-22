import { useDispatch, useSelector } from "react-redux"
import {actions} from '../lib/Slice'

function ToolBar(props) {
  let dispatch = useDispatch()
  let editInline = useSelector(state => state.data.editInline)
  return (
    <div className="p-2 mb-2 bg-gray-200 flex gap-2">
      {props.logo}
      <span className="border-2 border-black p-1"></span>
      {props.children}
      <span className = {"border ml-auto" + (editInline ? ' border-green-700 bg-green-200' : '')} onClick = {()=>dispatch(actions.toggleEditInline())}>📑</span>
    </div>
  )
}

export default ToolBar