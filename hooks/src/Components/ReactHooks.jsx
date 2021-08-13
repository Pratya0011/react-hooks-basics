import React, { createContext } from 'react'
import { useState, useEffect, useContext } from 'react'
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}
const ThemeContext = createContext(themes.light);
export default function ReactHooks() {
        const [age,setAge] = useState(19);
        const [siblingsNum,setSiblingsNum] = useState(10)
        const [Count, setCount] = useState(0);
        useEffect(()=>{
            document.title = 'You are '+ age + ' years old!'
        })
        const [themestyle,setThemestyle] = useState(themes.dark)
        var hanelThemestyle = ()=>{
            setThemestyle(themestyle === themes.dark?themes.light:themes.dark)
        }
        const handleClick = ()=> setAge(age+1)
        const handlesibling = ()=> setSiblingsNum(siblingsNum+1)

        var ThemeButton = ()=>{
            const theme = useContext(ThemeContext);
            return (
                <div style={{background:theme.background,color:theme.foreground}}>
                    <h1>The theme here</h1>
                </div>
            )
        }
    
    return (
        <>
        <div>
            Today I am {age} years Old<br/>
            I have {siblingsNum} Sibling
            <div><button onClick={handleClick}>Get Older</button><button onClick={handlesibling}>More Sibling</button></div>
            <p>count Value is:{Count}</p>
            <div><button onClick={()=>setCount(0)}>Reset</button><button onClick={()=>setCount(Count+1)}>plus</button><button onClick={()=>setCount(Count-1)}>Minus</button></div>
        </div>
        <ThemeContext.Provider value={themestyle}>
            <ThemeButton></ThemeButton>
            <button onClick={hanelThemestyle}>change</button>
        </ThemeContext.Provider>
        </>
    )
}
