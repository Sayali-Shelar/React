import React, { useState } from 'react'
import './Practice.css'

const Practice = () => {
  const [username , setUsername] = useState ("")
  const [address , setAddress] = useState("")
  const [phone , setPhone] = useState ("")
  const [email , setEmail]= useState("")
  const SubmitForm =((e)=>{
      e.preventDefault();
  })
  return (
    <div className='FormMain'>
      <div className='input'>
      <form onSubmit={SubmitForm}>
        <input 
        type="text"
         placeholder='Your Name' 
         onChange={((e)=>{setUsername(e.target.value)})}
         /><br/><br/>

        <input 
        type="number"
         placeholder='Your Phone Number' 
         onChange={((e)=>{setPhone(e.target.value)})}/>
         <br/><br/>

        <input 
        type="text" 
        placeholder='Your Address'
        onChange={((e)=>{setAddress(e.target.value)})}/>
        <br/><br/>

        <input 
        type="email" 
        placeholder='Your email '
        onChange={((e)=>{setEmail(e.target.value)})}/>
        <br/> <br/>

        <button>Submit</button>

        </form>
      </div>

      <div className='output'>

      <p className='name'><b>{username}</b></p>
      <p><b>Address :</b> {address}</p>
      <p><b>Contact N0 :</b> {phone}</p>
      <p><b>E-mail Id : </b> {email}</p>

      </div>


    </div>
  )
}

export default Practice