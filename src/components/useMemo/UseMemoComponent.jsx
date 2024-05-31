import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const UseMemoComponent = () => {
const [inputValue, setInputValue] = useState("1")

const calculateResult = (input)=>{
    console.log("calculating result.....")
    return input.length*100;
}

const memoizedResult = useMemo(()=>calculateResult(inputValue),[inputValue])

  return (
    <div>UseMemoComponent <br />
        <input type="text"
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value) }/>
        <h1>inputLength = {memoizedResult}</h1>
    </div>
  )
}

export default UseMemoComponent