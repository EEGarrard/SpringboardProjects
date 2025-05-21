import { useState } from 'react'
import Child from './Child'
import './App.css'
import CountContext from './CountContext'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
import ThemeProvider from './ThemeProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='App'>
     
  <ThemeProvider>
     <Navbar/>
  <Child/>
  </ThemeProvider>
    </div>
   
  )
}

export default App
