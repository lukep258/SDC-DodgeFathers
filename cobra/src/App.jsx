import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* Mote's Carousel below, move where necessary */}
      <Carousel /> 
    </>
  )
}

export default App
