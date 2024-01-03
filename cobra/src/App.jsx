import { useState } from 'react'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'

=======
import Carousel from './components/Carousel'
>>>>>>> 925e1e8 (Images Added and Functional)

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <FactTwo/>
      <FactThree/>
=======
      {/* Mote's Carousel below, move where necessary */}
      <Carousel /> 
>>>>>>> 925e1e8 (Images Added and Functional)
    </>
  )
}

export default App