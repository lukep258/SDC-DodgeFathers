import React, { useState, useEffect } from 'react';
import jsonData from '../reviews.json'; // adjust the path according to your file structure

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [upVoted, setUpVoted] = useState([]);
    const [downVoted, setDownVoted] = useState([]);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {
        setReviews(jsonData); // Load the data from the JSON file into the state
        // Initialize upVoted and downVoted arrays
        setUpVoted(new Array(jsonData.length).fill(0));
        setDownVoted(new Array(jsonData.length).fill(0));
    }, []);


    const handleUpVote = (index) => {
        const newUpVoted = [...upVoted];
        newUpVoted[index] += 1;
        setUpVoted(newUpVoted);
    };

    const handleDownVote = (index) => {
        const newDownVoted = [...downVoted];
        newDownVoted[index] += 1;
        setDownVoted(newDownVoted);
    };


    const handleShareClick = () => {
        setShowShareOptions(!showShareOptions); // Toggle visibility
    };

    const reviewsPerPage = 5; // Set the number of reviews per page
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Get current reviews
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    return (
        <div>

            {currentReviews.map((review, index) => (
                <div key={index} className="review">
                    <div className="flex py-5 m-auto max-w-[75%]  border-t-[1px]">
                        <div className="flex flex-col w-full font-titillium">
                            <div className="flex flex-row gap-2">
                                <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-16 h-16">
                                            <span className="text-xl">{review.firstLetter}</span>
                                        </div>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex flex-row gap-2 justify-between">
                                        <div className="flex flex-row gap-2">
                                            <p className="font-semibold text-l">{review.name}</p>
                                            <p className="">{review.verifiedBuyer}</p>
                                        </div>         
                                        <p className="font-regular">{review.date}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold" >{review.title}</p>
                                        <p className="font-regular" >{review.review}</p>
                                    </div>
                                    <div className="flex flex-row gap-2 justify-between">
                                        <div className="flex flex-row gap-2 cursor-pointer">
                                            <span className="material-symbols-outlined scale-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></span>
                                            <p className="font-semibold"  onClick={handleShareClick}>Share</p> 
                                            {showShareOptions && <p className="font-semibold">Share</p>}</div>
                                        <p className="flex flex-row font-regular">
                                            Was This Review Helpful?
                                            <svg onClick={() => handleUpVote(index)} className='mx-2 fill-slate-500' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"/></svg>
                                            {upVoted[index]}
                                            <svg onClick={() => handleDownVote(index)} className='mx-2 fill-slate-500' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z"/></svg>
                                            {downVoted[index]}
                                            </p>
                                    </div>
                                    {review.link !== null && <div  className='h-20'><img src={review.link} alt="img" className='size-20'/></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center mb-8 join">
                {[...Array(totalPages).keys()].map(number => (
                    <button
                        key={number + 1}
                        className={`join-item btn ${currentPage === number + 1 ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Reviews;




{/* <a href='https://www.facebook.com/dialog/feed?app_id=226132034107547&aria_labelled_by=facebook-review-469476096&display=popup&link=http%3A%2F%2Freviews.me%2Ffacebook_post%3Fimage_url%3Dhttps%253A%252F%252Fcdn-yotpo-images-production.yotpo.com%252FProduct%252F491586914%252F409856749%252Fsquare.jpg%253F1699592830%26product_url%3Dhttps%253A%252F%252Fyotpo.com%252Fgo%252FxXNWEzan%26review%3DBeen%2Bplaying%2Bcobra%2Bfor%2Byears.%2BBy%2Bfar%2Bthe%2Bbest%2Bdriver%2BI%2Bhave%2Bplayed.%2BThe%2Bdistance%2Band%2Bforgiveness%2Bhave%2Bhelped%2Bmy%2Bgame%2Btremendously.%2BGonna%2Border%2Bthe%2B3%2Bwood%2Bsoon.%26social_title%3DPhenomenal%2BClub&redirect_uri=http%3A%2F%2Fmy.yotpo.com%2Fshares%3Freview_id%3D469476096" '>| Facebook </a>
<a href='https://twitter.com/intent/tweet?aria_labelled_by=twitter-review-469476096&text=Been+playing+cobra+for+years.+By+far+the+best+driver+I+have+played.+The+distance+and+forgiveness+have+helped+my+game+tremendously.+Gonna+order+the+3+wood+soon.&url=https%3A%2F%2Fyotpo.com%2Fgo%2FgxZGnbwE&via=yotpo'>- Twitter - </a>
<a href='https://www.linkedin.com/shareArticle?aria_labelled_by=linkedin-review-469476096&mini=true&source=Yotpo&summary=Been+playing+cobra+for+years.+By+far+the+best+driver+I+have+played.+The+distance+and+forgiveness+have+helped+my+game+tremendously.+Gonna+order+the+3+wood+soon.&title=Phenomenal+Club&url=https%3A%2F%2Fyotpo.com%2Fgo%2F5WOZ57LC'>LinkedIn |</a></p>} */}
