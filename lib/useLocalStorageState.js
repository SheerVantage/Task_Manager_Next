import { useState } from 'react'

function useLocalStorageState() {
  
    let [value, setState] = useState()

    function customGetState(theValue){
        return value
    }

    function customSetState(theValue){
        localStorage.setItem('tid', theValue)
        setState(theValue)
    }
  
    // return [value, customGetState, customSetState]
    // return customSetState
    return { customGetState, customSetState }

}

export default useLocalStorageState