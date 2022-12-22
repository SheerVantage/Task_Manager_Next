import { useState } from 'react'

function useInputManager(theValue) {

    let [ value, setValue ] = useState(theValue)
    
    function setter(nv){
        setValue(nv)
    }

    function getter(){
        return value
    }

    return [getter, setter]

}

export default useInputManager