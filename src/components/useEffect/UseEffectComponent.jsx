// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';


// export const UseEffectComponent = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         const fetchData = async () => {
//             const api = await fetch('https://jsonplaceholder.typicode.com/photos')
//             const result = await api.json()
//             // console.log(result)
//             console.table(result)


//         }
//         fetchData()
//     }, [])

//     return (
//         <>
//             <div>UseEffectComponent</div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>+</button>
//         </>
//     )
// }

// export default UseEffectComponent;

