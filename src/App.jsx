import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [data, setData] = useState()
//   const [print, setPrint] = useState(false)


// function getData(val){
//   // console.log(val.target.value)
//   setData(val.target.value)
//   setPrint()
// }
//   return (
//     <>
//      <div className='App'>
//       {
//         print ? <h1>{data}</h1>  :null 
//       }
//       <input type="text"onChange={getData} />
//       <button onClick={()=>setPrint(true)}>print Data</button>
//      </div>
//     </>
//   )
// }

// export default App

function App() {
  const [ hide, setHide] = useState(false)
 


  return (
    <>
     <div className='App'>
      {
        hide ? <h1>hello Anand Kumar Gautam coder from frontend devloper</h1>  :null 
      }
    
      {/* <button onClick={()=>setHide(false)}>hide</button>
      <button onClick={()=>setHide(true)}>show</button> */}
      <button onClick={()=>setHide(!hide)}>toggle</button>
     </div>
    </>
  )
}

export default App
