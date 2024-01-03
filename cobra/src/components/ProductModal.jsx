export default function ProductModal({productModal, toggleModal}) {

    const handleClick = () => {
        toggleModal([]);
        console.log("WORKING!")
    };


    return (
        <div className="modal-container cursor-zoom-out" onClick={handleClick}>
            {productModal.map((imageUrl, index) => (
                <div key={index} className="image-container">
                <img src={imageUrl} alt={`Product Image ${index}`} className="modal-image" />
                </div>
            ))}
        </div>
    )

}