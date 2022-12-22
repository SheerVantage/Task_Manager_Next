import { useState } from "react"
import Menu from "../../components/Menu"

function member() {
    let [option, setOption] = useState('')

    function update(e){
        setOption(e.target.value)
    }
  return (
<div className='flex p-5 w-full h-full flex-wrap'>
    <h1 className="text-2xl bg-blue-400 w-full">Member Page</h1>
      <Menu activeLink = 'member'/>
      <div className="border-2 bg-gray-100 p-4 gap-3 grid grid-cols-2">
        {/* Detail of task number: {task.ID} - {router.query.name} - {router.query.duration}
        --{task.Status}=== */}
        <label>Name : <input /> </label>
        <label>Mobile : <input /> </label>
        <label>Address : <input /> </label>
        <label>Business: <select value = "1" onChange = {update}>
            <option ></option>
            <option value = "1">aaaa</option>
            <option value = "22">bbbbb</option>
            <option value = "333">cccc</option>
            <option value = "4444">dddd</option>
        </select></label>
      </div>
    </div>
  )
}

export default member