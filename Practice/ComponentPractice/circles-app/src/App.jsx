import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Circle from './Circles'
import ColoredCircles from './ColoredCircles.'
import './Circles.css'
import './Buttons.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <ColoredCircles/>
</div>
    </>
  )
}

export default App
