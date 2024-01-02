
const Carousel = () => {
    return (

        // Carousel snaps to center of each item. !IMPORTANT: Change padding once scroll-bar is added to page.
        // Check ../index.css for more info on carousel items.

        <div className="carousel carousel-center relative scroll-smooth snap-x snap-mandatory scroll-pr-6">

            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="https://images.salsify.com/image/upload/s--rzT9cPwv--/d5125613f56e924a328227b56f72bcd9bf9ccdf4.jpg" alt="1stCarouselItem" />
            </div>
            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="https://images.salsify.com/image/upload/s--BZhdhI1F--/c3686830477be0b16a2bb142544168ffca185566.jpg" alt="2ndCarouselItem" />
            </div>
            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="https://images.salsify.com/image/upload/s--k_fiw7Y1--/9ccb037712039b3cd60e0e7f6f8fd2da0370802c.jpg" alt="3rdCarouselItem" />
            </div>
            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="https://images.salsify.com/image/upload/s--4kopST6P--/d982cace2faf3a9c75824eb58a3cdbcd319a0879.jpg" alt="4thCarouselItem" />
            </div>
            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="https://images.salsify.com/image/upload/s--RbmxuiJv--/f3bb4f9f1a52b17e9dc301078593f711ce173a28.jpg" alt="5thCarouselItem" />
            </div>
            <div className="carousel-item custom-carousel-item custom-carousel-item">
                <img src="	https://images.salsify.com/image/upload/s--3W2-ylQs--/cda6b63d593e850b5ef8c7922830e82422a40667.jpg" alt="6thCarouselItem" />
            </div>

        </div>
    )
}

export default Carousel