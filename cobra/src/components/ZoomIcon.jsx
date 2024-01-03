// export function ProductImageColSpan2({ imageUrl, altText, toggleModal }) {
//     const handleInputDisplay = () => {
//         toggleModal();
//     };
    
//     return (
//         <li className="product-image w-full col-span-2 relative" onClick={handleInputDisplay}>
//             <div className="relative">
//                 <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
                // <div className="absolute top-0 left-0 scale-75">
                //     <div className="bg-slate-100 rounded-full zoom-icon p-1">
                //         <span className="material-symbols-outlined">zoom_in</span>
                //     </div>
                // </div>
//             </div>
//         </li>
//     );
// }

export function ZoomIcon() {
    return (
        <div className="absolute top-0 left-0 size-75">
            <div className="zoom-icon bg-slate-100 rounded-full">
                <span className="material-symbols-outlined">zoom_in</span>
            </div>
        </div>
    );
}