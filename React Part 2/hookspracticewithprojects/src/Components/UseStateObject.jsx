import React, { useCallback, useState } from 'react'

const UseStateObject = () =>{
    const [obj,myObj] = useState({
        name:"Adlin",age:30,sex:"Male"
    })

    // ...(Spread operator)
    const onChange=()=>{
        myObj({...obj, name:"Amire"})
    }

    return (
        <>
        <h1>Name: {obj.name}, Age: {obj.age}, Sex:{obj.sex} </h1>
        <button  onClick={onChange}>click to chnge conent</button>
        </>
    )
}
export default UseStateObject