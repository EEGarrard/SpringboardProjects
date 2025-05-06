import React, {useState} from "react";
import Timer from "./Timer";

const TimerWrapper = () =>{
    const [timerVisible, setTimerVisible] = useState(true);
    const toggleTimer = () =>
        {setTimerVisible(!timerVisible)}
    
    return (
    <div>
        <button onClick={toggleTimer}>ToggleTimer</button>
        {timerVisible && <Timer/>}
    </div>)
}

export default TimerWrapper