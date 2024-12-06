import React, { useState } from 'react'

const UserEventOnChange = () => {
    const[ value, setValue] = useState("")
  return (
    <div><h1>UserEventOnChange</h1>
    {value}
    <input value={value} onChange={(e)=>{setUIValue(e.target.value)}}/></div>
  )
}

export default UserEventOnChange