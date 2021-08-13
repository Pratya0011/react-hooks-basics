import React from 'react'
import { useState } from 'react'

export default function ReactHooks() {
    ()=>{
     const [state, setstate] = useState({ age:20,sibling:10})
     const handleClick=(val)=>{
         setstate({
             ...state,
             [val]:state[val]+1
         })
     }
    return (
        <div>
            Today I am {age} years Old<br/>
            I have {sibling} Sibling
            <div><button onClick={handleClick(val)}>Get Older</button><button onClick={handleClick(val)}>More Sibling</button></div>
        </div>
    )
}