import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductModal from './components/ProductModal'
import './App.css'

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
        {productModal.length > 0 ? (
            <ProductModal productModal={productModal} toggleModal={toggleModal} />
        ) : (
            <>
                <Navbar />
                <Product toggleModal={toggleModal} />
            </>
        )}
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