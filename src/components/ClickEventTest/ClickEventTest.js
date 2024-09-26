import React, { useState } from 'react';

const ClickEventTest = () => {

    const[value, setValue]  = useState("Click Button")
  return (
    <div>
      <p>{value}</p>
      <button onClick={()=>{setValue("Button is clicked")}}>Click</button>
    </div>
  );
}

export default ClickEventTest;
