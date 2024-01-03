
export default function ProductModal({ productModal, toggleModal }) {
    const handleClick = () => {
        toggleModal([]);
    };

    return (
        <div className="modal-container absolute top-0 inset-0 flex-column z-50 cursor-zoom-out" onClick={handleClick}>
            {productModal.map((imageUrl, index) => (
                <div key={index} className="image-container">
                    <img src={imageUrl} alt={`Product Image ${index}`} className="modal-image w-full" />
                </div>
            ))}
        </div>
    );
}