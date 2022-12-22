import { configureStore } from '@reduxjs/toolkit'
import data from './Slice'

const Store = configureStore({
    reducer: { data }
  })
  
export default Store