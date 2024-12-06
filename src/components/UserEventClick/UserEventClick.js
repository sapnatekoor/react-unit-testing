import React, { useState } from 'react'

const UserEventClick = () => {
    const[ value, setValue] = useState()
  return (
    <div><h1>UserEventClick</h1>
    {value}
    <button onClick={()=>{setValue("Hello")}}>Click</button>
    </div>
  )
}

export default UserEventClick