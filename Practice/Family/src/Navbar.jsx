import React, {useContext, useState} from "react";
import ThemeContext from "./ThemeContext";

const Navbar = () =>{
    const backgroundColor = useContext(ThemeContext)
    return (
        <nav style={{backgroundColor}}>
            <span>Website</span>
        </nav>
    )
}

export default Navbar