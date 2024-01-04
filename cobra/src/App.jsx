import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'


import './App.css'
import TechOverview from './components/TechOverview'

function App() {
  const [count, setCount] = useState(0)
  const [productModal, setProductModal] = useState([]);

  const toggleModal = (images) => {
    if (productModal.length === 0) {
        setProductModal(images);
    } else {
        setProductModal([]);
    }
  };

  return (
    <>
       
            <>
                <Navbar />
                <Product />
                <FactTwo/>
                <FactThree/>
            </>
    </>
  );
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