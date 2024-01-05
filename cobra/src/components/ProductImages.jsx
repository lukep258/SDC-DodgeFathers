import { useState, useEffect } from 'react';
import { ZoomIcon } from './ZoomIcon';
import imageUrls from '../assets/image_urls.js';

export default function ProductImages({ selectedImage, toggleModal }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (index) => {
        toggleModal(imageUrls, index);
    };

    return (
        <div className="w-2/3">
            <div className="product-image relative cursor-zoom-in mb-2">
                <div
                    className={`image-container ${selectedImage === 0 ? 'border-2 border-black rounded-sm ' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <img src={imageUrls[0]} className="w-full h-full object-cover" />
                    <ZoomIcon />
                </div>
            </div>
            <div className={`${windowWidth < 990 ? 'flex-col items-center' : 'grid grid-cols-2 gap-y-2 gap-x-4'}`}>
                {imageUrls.slice(1).map((url, index) => (
                    <div className="product-image relative cursor-zoom-in" key={index + 1}>
                        <div
                            className={`image-container ${selectedImage === index + 1 ? 'border-2 border-black rounded-sm' : ''}`}
                            onClick={() => handleClick(index + 1)}
                        >
                            <img src={url} alt={`Product Image ${index + 1}`} className="w-full h-full object-cover" />
                            <ZoomIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}