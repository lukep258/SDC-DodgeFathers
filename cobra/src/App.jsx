import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
    </>
  )
}

export default App
