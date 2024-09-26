import React, { useState } from 'react'


const AfterBeforeHooks = () => {
    const[ value, setValue] = useState("Hello")
  return (
    <div>
        <button onClick={()=>{setValue("Hello World")}}>{value}</button>
    </div>
  )
}

export default AfterBeforeHooks