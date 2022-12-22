
import {createSlice} from '@reduxjs/toolkit'

let tid, index
let methods = {

    updateTask: (state, action) => { state.currentTask[action.payload.field] = action.payload.value },
    setTasks: (state, action) => { 
        state.tasks = action.payload
        tid = localStorage.getItem('tid')
        index = state.tasks.findIndex(item => item.ID == tid) || 0
        state.currentTask = state.tasks[index]
    },
    setTaskDetail: (state, action) => { state.currentTask = action.payload },
    setTask: (state, action) => {
        if(action.payload.ID){
            state.tasks = [...state.tasks.map( task => task.ID != action.payload.ID ? task : action.payload)]
            fetch('./api/data?a=Save&e=Task', {method:'POST', body:JSON.stringify(action.payload), headers: {
                'Content-Type': 'application/json',
            }})
        }
        else{
            fetch('./api/data?a=Save&e=Task', {method:'POST', body:JSON.stringify(action.payload), headers: {
                'Content-Type': 'application/json',
            }}).then(r=>r.json()).then( async data => {
                // data = await data.ID
                // console.log(data)
                // state.currentTask = { ...action.payload, ID: data.ID }
                // Slice.caseReducers.setCurrentTask( state, { ...action, payload:{ ...action.payload, ID: data.ID } } );
            })
            // state.tasks = [...state.tasks.map( t => t), nt]
            // console.log(state.tasks)
            
        }
    },
    setCurrentTask: (state, action) => { 
        state.currentTask = action.payload
        // localStorage.setItem('tid', action.payload.ID)
    },
    
    toggleEditInline: ( state, action )=>{ state.editInline = !state.editInline },
    edit:(state, action) => { state.isEditing = action.payload },
    addTask:(state, action) => { state.currentTask = {Name:'', Duration:'', Status:'', Particulars:''} },

}
let currentTask = { editInline:false, Name:'', Status:'', Durations:'', Particulars:'', Date:'' }
let states = { tasks: [], currentTask }

const Slice = createSlice({
    name:'data',
    initialState: states,
    reducers:methods
})

export default Slice.reducer
export const actions = {...Slice.actions}