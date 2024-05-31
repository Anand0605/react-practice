import React from 'react'
import {useFetch} from './useFetch'

const Test = () => {

    console.log(useFetch("https://jsonplaceholder.typicode.com/photos"))
    const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/photos")
  return (
    <div>

        <h2>{loading && "loading"}</h2>
        <h2>{error && "Error"}</h2>
        {
            data.map((d)=>{
                return(<>
                <p style={{height:"50px",
                 width:"50px",
                 margin:"1rem",
                 backgroundColor:'red'
                 }}>
                    {d.title}
                </p>
                </>)
            })
        }
    </div>
  )
}

export default Test