import { useState } from 'react';
import { ZoomIcon } from './ZoomIcon';
import imageUrls from '../assets/image_urls.js';

export default function ProductImages({ toggleModal }) {

    const handleClick = () => {
        toggleModal(imageUrls);
        console.log("WORKING!")
    };

    return (
        <div className="w-3/5 border-2 border-black align-left" onClick={handleClick}>
            <div className="product-image relative cursor-zoom-in">
                <div key={0} onClick={() => toggleModal(imageUrls[0])}>
                    <img src={imageUrls[0]} className="w-full h-full object-cover" />
                    <ZoomIcon />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {imageUrls.slice(1).map((url, index) => (
                    <div className="product-image relative cursor-zoom-in" key={index + 1}>
                        <div onClick={() => toggleModal(url)}>
                            <img src={url} alt={`Product Image ${index + 1}`} className="w-full h-full object-cover" />
                            <ZoomIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}