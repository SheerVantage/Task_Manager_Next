
import {createSlice} from '@reduxjs/toolkit'

const Slice = createSlice({
    name:'data',
    initialState: { tasks: [ {name:'First'}, {name:'Second'}, {name:'Third'} ] },
    reducers:{
        setTasks: (state, action) => { state.tasks = action.payload },
        setTask: (state, action) => {
            state.tasks = [...state.tasks.map( task => task.ID != action.payload.ID ? task : action.payload)]
        },
        setCurrentTask: (state, action) => { state.currentTask = action.payload },
        setTaskName: (state, action) => { state.currentTask.Name = action.payload },
        setTaskDuration: (state, action) => { state.currentTask.Duration = action.payload },
        setTaskParticulars: (state, action) => { state.currentTask.Particulars = action.payload },
        setTaskStatus: (state, action) => { state.currentTask.Status = action.payload },
        edit:(state, action) => { state.name = action.payload },
        save:state => {},
    }
})

export default Slice.reducer
// export const { setTasks } = Slice.actions
export const {edit, save, setTasks, setTask, setCurrentTask, setTaskName, setTaskDuration, setTaskParticulars, setTaskStatus} = Slice.actions