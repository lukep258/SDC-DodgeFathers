import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'

import Carousel from './components/Carousel'

import './App.css'
import TechOverview from './components/TechOverview'
import ReviewHeader from './components/ReviewHeader'

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
        <ReviewHeader />
                {/* <Product />
                <FactTwo/>
                <FactThree/>
                <Footer />
                <FactThree />
                <Carousel /> */}
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