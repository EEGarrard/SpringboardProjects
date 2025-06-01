import React, { useState } from "react"
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";


export default function App() {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>inc 33</button>
    </div>
  )
}
