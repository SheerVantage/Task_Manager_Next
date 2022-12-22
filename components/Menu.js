
function Menu({activeLink}) {
  return (
    <ul className='bg-gray-100 p-3 flex flex-col gap-2'>
        <label className='text-xl text-green-700'>Menu</label>
        <li className={activeLink == 'task' ? 'bg-blue-300' :""}><a href = "/task/2">Task</a></li>
        <li className={'flex ' + ( activeLink == 'member' ? 'bg-blue-300' :"")}><a href = "/member/list">Member <a className='ml-auto p-2 bg-green-400' href = "/member/add">+</a></a></li>
        <li className={activeLink == 'client' ? 'bg-blue-300' :""}><a href = "/client">Client</a></li>
    </ul>
  )
}

export default Menu