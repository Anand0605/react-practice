import React, { useEffect } from 'react'
import { useState,useLayoutEffect } from 'react'

const UseLayoutComponent = () => {
const [bgColor, setBgColor] = useState('blue')

useLayoutEffect(()=>{
    console.log("useLayoutEffect is running.....")
    document.body.style.backgroundColor = bgColor
}, [bgColor])

useEffect(()=>{
    console.log("useEffect is running.....")
},[])

  return (
    <div>UseLayoutComponent
        <button onClick={()=>setBgColor('red')}>changecolor</button>
    </div>
  )
}

export default UseLayoutComponent