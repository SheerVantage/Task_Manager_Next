
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editor from './Editor'
import { actions } from '../lib/Slice'
import { setCurrentTask } from '../lib/Slice'
import useLocalStorageState from '../lib/useLocalStorageState'

function Lister( {caption = 'Listing', list = [], columns} ) {

    const dispatch = useDispatch()

    let editInline = useSelector(state => state.data.editInline)

    let selectedItem = useSelector( state => state.data.currentTask )

    const [ filters, setFilters ] = useState( columns.reduce( ( accumulator, value ) => { return { ...accumulator, [value]:'' } }, {}))

    function updateFilter(e){
        filters[e.target.attributes.field.value] = e.target.value
        setFilters({...filters})
    }

    function getFilteredItems(item){
        return columns.reduce((flag, column)=>{return flag && item[column] ? item[column].toLowerCase().includes(filters[column].toLowerCase()) : flag}, true)
    }
    // let [value, getState, setState] = useLocalStorageState()
    // let customSetState = useLocalStorageState()
    let { customGetState, customSetState} = useLocalStorageState()

    function updateItem( item ){
        dispatch( actions.setCurrentTask( item ) )
        customSetState(item.ID)
    }

    function selectTask(task){
        dispatch( setCurrentTask( task ) )

    }

    return (
        <div className='flex flex-col gap-0 overflow-auto '>
{/* ---{value}=== */}
            { selectedItem && !editInline &&  <Editor item = {selectedItem}/> }
            
            <div className={`hidden sm:grid grid-cols-4 ${columns.length}`}>{ columns.map( column => <input className='px-1' key = {column} field = {column} value = {filters[column]} onChange = {updateFilter} placeholder = {column}/>) }</div>
            
            <ul className='flex flex-col gap-2'> {
                list?.filter(getFilteredItems).map( (item, i) => <li key = {i} onClick={()=>updateItem(item)} className={'rounded list-none px-2 py-1 hover:bg-gray-200 bg-gray-100' + (item.ID == selectedItem?.ID ? ' bg-green-300 hover:bg-green-500' : '')}>
                    {editInline && item.ID == selectedItem?.ID ? <Editor item = {selectedItem}/> :
                    <div className='grid grid-cols-5 gap-0.5'>
                        <a href = {`./task/${item.ID}`} className='col-span-4 row-span-2 sm:col-span-1 sm:row-span-2'>
                        {item.ID}) {item.Name}
                            {/* <span className='rounded-md float-right px-2 text-xs p-0.5 bg-green-300'>{item.DateTime_End || ''}</span> */}
                        </a>
                        <span className='rounded-md float-right px-2 text-xs p-0.5 bg-green-300'>{item.DateTime_End || ''}</span>
                        <span className='rounded-md text-xs p-0.5 bg-gray-200 flex text-center'>{item.Duration}</span>
                        <span className='rounded-md text-xs p-0.5 bg-gray-200 flex text-center align-middle'>{item.Status}</span>
                        <span className=' col-span-5 text-xs'><br/>{item.Particulars}</span>
                    </div> }
                </li> )
            } </ul>
        </div>
    )
}

export default Lister





















/*
  const [selectedItem, setSelectedItem] = useState({})
        { <div className='text-green-600 border p-1 border-black'>{caption}</div>
        <Editor item = {selectedItem} updateItem = {setSelectedItem}/>
        <ul className='divide divide-green-200 flex flex-col'>
            {list.map(item => <li className = {"p-2 flex gap-1 text-gray-500 hover:text-gray-900 hover:bg-yellow-500" + (item.ID == selectedItem?.ID ? ' bg-yellow-600 text-black' :'') } onClick={ ()=> setSelectedItem(item) }>
                <span>{item.Name}</span>
                <span className="rounded border border-blue-900 text-xs px-2">{item.Date}</span>
                <span className='rounded border border-blue-900 text-xs px-2'>{item.Duration}</span>
            </li>)}        
        </ul>}
*/