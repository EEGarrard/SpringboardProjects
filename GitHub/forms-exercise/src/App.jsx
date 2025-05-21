import { useState } from 'react'
import './App.css'
import SpacecraftBuilder from './Components/SpacecraftBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <SpacecraftBuilder/>
      </div>
    </>
  )
}

export default App
