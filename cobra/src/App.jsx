import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [productModalOpen, setProductModalOpen] = useState(false);


  return (
    <>
      <Navbar />
      <Product />
    </>
  )
}

export default App

//   const [modalImages, setModalImages] = useState([])

//   const toggleModal = (images) => {
//     if (modalImages.length === 0) {
//         setModalImages(images);
//     } else {
//         setModalImages([]);
//     }
// };