import ProductImages from './ProductImages'
import ProductModal from './ProductModal'
import { useState, useEffect } from 'react'

export default function Product() {
    const [productModal, setProductModal] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const toggleModal = (images, selection) => {
        if (productModal.length === 0) {
            setSelectedImage(selection);
            setProductModal(images);
        } else {
            setProductModal([]);
        }
    };

    return (
        <>
            <div className={`product-container flex justify-center mt-10 ${windowWidth < 990 ? 'flex-col items-center' : ''}`}>
                <div className="w-3/5">
                    <ProductImages selectedImage={selectedImage} toggleModal={toggleModal} />
                    {/* Right Column Placeholder */}
                </div>
            </div>
            {productModal.length > 0 && (
                <ProductModal productModal={productModal} toggleModal={toggleModal} />
            )}
        </>
    );
}