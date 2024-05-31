import React, { useEffect } from 'react'

const ChildComponent = ({handleClick}) => {
  useEffect(()=>{
console.log(" child component useEffect is running....")
  },[handleClick])

  return (
    <div>ChildComponent
       
    </div>
  )
}

export default ChildComponent