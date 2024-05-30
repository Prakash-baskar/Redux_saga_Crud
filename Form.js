
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './Action'


const Form = () => {
     
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();

     const handleSubmit =(e) =>{
        // e.preventDefalut();
        dispatch(addItem({name,password}))
      
     }
  return (
    <div className='formhead'>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label><br></br>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            <label>Password</label><br></br>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='submit'>
            <button className='sub'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
