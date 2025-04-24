import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Dice Roller Pro</h1>
        <p className="app-subtitle">Experience the thrill of rolling</p>
      </header>
      
      <div className="logo-container">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      
      <main className="game-container">
        <Dice numDice={6} maxVal={6} />
      </main>
      
      <footer className="app-footer">
        Made with ❤️ using Vite + React | © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App