import { useState } from 'react'
import './App.css'
// import img from './image/photo.webp'
// import UseStateComponent from './components/UseState/UseStateComponent'
// import UseReducerComponent  from './components/useReducer/UseReducerComponent'
// import UseEffectComponent from './components/useEffect/UseEffectComponent'
// import UseRefComponent from './components/useEffect/UseRefComponent'
// import MoneyState from './components/useContext/context/MoneyState'
import IndianGovt from './components/useContext/IndianGovt'
import UseLayoutComponent from './components/UseLayoutEffect/UseLayoutComponent'

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

// function App() {
//   const [ hide, setHide] = useState(false)
 


//   return (
//     <>
//      <div className='App'>
//       {
//         hide ? <h1>hello Anand Kumar Gautam <br /> coder <br /> from frontend devloper <img className='height-100px' src={img} alt="" /></h1>  :null 
//       }
    
//       {/* <button onClick={()=>setHide(false)}>hide</button>
//       <button onClick={()=>setHide(true)}>show</button> */}
//       <button onClick={()=>setHide(!hide)}>toggle</button>
//      </div>
//     </>
//   )
// }

// export default App

function App() {
  const [ hide, setHide] = useState(false)
 


  return (
    <div>
    {/* <UseStateComponent/> */}
    {/* <UseReducerComponent/> */}
    {/* <UseEffectComponent/> */}
    {/* <UseRefComponent/> */}
    {/* <IndianGovt/> */}
    <UseLayoutComponent/>
    </div>
  )
}

export default App
