import React, { useState } from 'react'

const BasicForm =() => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const submitForm =(e) =>{
        e.preventDefault(); // prevent from auto refresh

        const newEntry = { email:email, password:password }

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
    }

    return (
        <>
            <form action='' className='formInput' onSubmit={submitForm} > 
                <div >
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' autoComplete='off' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password'  value={password} autoComplete='off'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {/* Display user data */}
            <div>
                {
                    allEntry.map((curValue) =>{
                        return(
                            <div className='showDetails'>
                                <p>Email: {curValue.email}</p>
                                <p>Password: {curValue.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default BasicForm