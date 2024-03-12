import React, { useState } from "react";

const UseStateArray = () => {
    const biodata = [
        {
            id: 0, myName: "Alex", age: 24
        },
        {
            id: 1, myName: "Shree", age: 22
        },
        {
            id: 2, myName: "OkGoogle", age: 21
        },
        {
            id: 3, myName: "Chatgpt", age: 20
        }
    ]
    const [myArray, setmyArray] = useState(biodata);
    const clearArray = () => {
        setmyArray([]);
    }
    const removeItenm = (id) => {
        // alert(id)
        const newArray = myArray.filter((curElement) => {
            return curElement.id !== id;
        })

        setmyArray(newArray)
    }

    return (
        <div className="container">
            {/* {
            biodata.map((curElement) => {
                return <h1 >Name: {curElement.myName}, Age: {curElement.age}</h1>
            })
            }
            OR */}


            {
                myArray.map((curElement) => {
                    return (

                        <h1 className="h1style" key={curElement.id}> Name: {curElement.myName}, Age: {curElement.age}
                            <button className="cancelbtn" onClick={() => removeItenm(curElement.id)}> remove</button></h1>
                    )
                }
                )
            }
            <button className="btn" onClick={clearArray}>clear All</button>


        </div>
    )
}
export default UseStateArray