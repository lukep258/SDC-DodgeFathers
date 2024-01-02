import { useState } from 'react'
import Navbar from './components/Navbar'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FactTwo/>
      <FactThree/>
    </>
  )
}

export default App
