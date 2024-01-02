import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

import './App.css'
import FactOne from './components/FactOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* Mote's Carousel below, move where necessary */}
      <Carousel /> 
      {/* Mote's FactOne component below, move where necessary */}
      <FactOne />
    </>
  )
}

export default App
