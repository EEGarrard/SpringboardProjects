import ThemeContext from "./ThemeContext";
import React, {useState} from "react";

const ThemeProvider = ({children}) =>{
    const [color, setColor] = useState('pink')
    const changeTheme = () =>{
        setColor(prevColor => prevColor === 'pink' ? 'orange': 'pink')
    }
    return (
<ThemeContext.Provider value={color}>
    <button  onClick={changeTheme}>Toggle Theme</button>
    {children}
</ThemeContext.Provider>
    )
}

export default ThemeProvider 