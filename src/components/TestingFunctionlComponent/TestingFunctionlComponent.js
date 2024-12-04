import React, { useState } from 'react';
import { checkOutsideFunction } from '../helper';

const TestingFunctionlComponent = () => {

    const[value, setValue] = useState("")
    const handleClickHandler = () =>{
        setValue("value")
    }
  return (
    <div>
      <button  onClick = {handleClickHandler} data-testId= "btn1">Click</button>

      <button  onClick = {checkOutsideFunction} >Outside Function call</button>

      <h2>{value}</h2>
    </div>
  );
}

export default TestingFunctionlComponent;
