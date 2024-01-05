import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Product from './components/Product'
import FactOne from './components/FactOne'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'
import Fact4 from './components/Fact4'
import Carousel from './components/Carousel'
import Ad from './components/Ad'
import TechOverview from './components/TechOverview'
import Specifications from './components/Specifications'
import ShaftSpecs from './components/ShaftSpecs'
import GripSpecs from './components/GripSpecs'
import RelatedProducts from './components/RelatedProducts'
import RecentlyViewed from './components/RecentlyViewed'
import Footer from './components/Footer'
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
            <>
                <Header />
                <Navbar />
                <Product />
                <FactOne />
                <FactTwo/>
                <FactThree/>
                <Fact4 />
                <Carousel />
                <Ad />
                <TechOverview />
                <Specifications />
                <ShaftSpecs />
                <GripSpecs />
                <RelatedProducts/>
                <RecentlyViewed />
                <Footer />
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