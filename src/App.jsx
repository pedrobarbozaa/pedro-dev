import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navsection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        Em desenvolvimento
      </p>
      <Navbar></Navbar>
      <Projects></Projects>
    </>
  )
}

export default App
''