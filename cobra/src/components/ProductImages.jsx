// Image 1:  https://www.cobragolf.com/cdn/shop/products/uyu4c54ijctbjg14hwia_1500x.jpg?v=1702389120

// Image 2:  https://www.cobragolf.com/cdn/shop/products/w3mekqyerel7bajscyp3_1500x.jpg?v=1702389121

// Image 3: https://www.cobragolf.com/cdn/shop/products/ygonxrvplpafjcuz2itm_1500x.jpg?v=1702389121

// Image 4: https://www.cobragolf.com/cdn/shop/products/z7at89roo75mg7sj5dke_1500x.jpg?v=1702389122

// Image 5: https://www.cobragolf.com/cdn/shop/products/ofch908w0aybwlf4zgof_1500x.jpg?v=1702389122

import { useState } from 'react';
import { ProductImageColSpan2, ProductImage } from './ProductImage';

export default function ProductImages() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = (image) => {
        if (isModalOpen) {
            setModalOpen(false);
         
        } else {
            
            setModalOpen(true);
        }
    };

    const imageUrls = [
        "https://www.cobragolf.com/cdn/shop/products/uyu4c54ijctbjg14hwia_1500x.jpg?v=1702389120",
        "https://www.cobragolf.com/cdn/shop/products/w3mekqyerel7bajscyp3_1500x.jpg?v=1702389121",
        "https://www.cobragolf.com/cdn/shop/products/ygonxrvplpafjcuz2itm_1500x.jpg?v=1702389121",
        "https://www.cobragolf.com/cdn/shop/products/z7at89roo75mg7sj5dke_1500x.jpg?v=1702389122",
        "https://www.cobragolf.com/cdn/shop/products/ofch908w0aybwlf4zgof_1500x.jpg?v=1702389122"
    ];

    return (
        <>
        {isModalOpen ? (
             <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-auto">
                <ul className="product-images flex-row">
                    {imageUrls.map((url, index) => (
                        <ProductImage toggleModal={toggleModal} imageUrl={url} altText="Product" key={index} />
                    ))}
                </ul>
            </div>
        ) : (
            <div className="w-3/5 border-2 border-black ">
                <div className="w-3/5 border-2 border-black align-left">
                    <ul className="product-images grid grid-cols-2 gap-2">
                        <ProductImageColSpan2 toggleModal={toggleModal} imageUrl={imageUrls[0]} altText="Product" />
                        {imageUrls.slice(1).map((url, index) => (
                            <ProductImage toggleModal={toggleModal} imageUrl={url} altText="Product" key={index} />
                        ))}
                    </ul>
                </div>          
              </div>
        )}
    </>
    );
}

