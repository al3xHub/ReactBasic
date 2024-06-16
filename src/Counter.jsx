import { useState } from "react"
export function Counter(){
    let [counter, setCounter] = useState(0)

    return <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>{
            setCounter(counter + 1)
        }}>Click</button>
    </div>
}