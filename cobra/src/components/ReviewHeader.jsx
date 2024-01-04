const ReviewHeader = () => {
	return (
        <div className="flex py-5 mx-2.5 test-class">
            
			<div className="rating-and-sumReviews test-comps min-w-[220px] w-[220px]">
				1
            </div>
            
			<div className="star-distribution test-comps min-w-[230px] w-[230px]">
				2
            </div>
            
            <div className="review-spacer test-comps flex-grow">
                3
            </div>
            
			<div className="min-w-[162px] w-[162px] flex flex-col justify-center gap-2">
				<div className="bg-[#6A6C77] h-8 mx-2 flex gap-1 justify-center items-center text-white text-sm">
					<svg width={18} height={18} className="stroke-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"/>
                    </svg>
                    <span>
                        WRITE A REVIEW
                    </span>
				</div>
                <div className="bg-[#6A6C77] h-8 mx-2 flex gap-1 justify-center items-center text-white text-sm">
                    <svg width={18} height={18} className="fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001z" />
                    </svg>
                    <span>
                        ASK A QUESTION
                    </span>
                </div>
            </div>
            
		</div>
	);
};

export default ReviewHeader;
