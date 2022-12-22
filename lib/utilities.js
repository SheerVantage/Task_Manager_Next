// import {useEffect} from 'react'
if (typeof window !== "undefined") { 
    /* we're on the server */
    // debugger
    // alert('testing this out')
    window.showAlert = function (){
        alert('test')
    }
    window.get = async function (url){
        return fetch(url).then(r=>r.json())
    }

    window.post = async function (url, data){
        return await fetch(url, {
            method:'POST',
            body:JSON.stringify(data)
        }).then(r=>r.json())
    }
}
// useEffect(() => {

    // window.get = async function (url){
    //     return fetch(url).then(r=>r.json())
    // }

    // window.post = async function (url, data){
    //     return await fetch(url, {
    //         method:'POST',
    //         body:JSON.stringify(data)
    //     }).then(r=>r.json())
    // }

// }, []);
// debugger
// window.showAlert = function (){
//     alert('test')
// }
