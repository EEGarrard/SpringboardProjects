import React, {useContext} from "react";
import Greatgrandchild from "./Greatgrandchild";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";


function Grandchild() {
    const {count, increment} = useContext(CountContext)
    const color = useContext(ThemeContext)
    return (
        <div style={{border: '4px solid #39CCCC', margin: '1rem'}}>
            <p>I'm the Grandchild!</p>
            <p style={{color}}>Count is: {count}</p>
            <button onClick={increment}>Add</button>
            <Greatgrandchild/>
        </div>
    )
}

export default Grandchild