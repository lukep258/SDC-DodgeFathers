const ReviewForm = () => {
	return (
        <div className="m-auto w-[75%] border-2 border-red-600 flex flex-col text-slate-500">
            <span className="font-semibold mb-8">WRITE A REVIEW</span>
            <span className="text-md mb-4"><span className="text-red-500">*</span>Indicates a required field</span>
            <span className="text-sm mb-4"><span className="text-red-500">*</span>Score:</span>
            <div className="rating ml-[-8px]">
                <input type="radio" name="rating-1" className="rating-hidden" checked/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
            </div>
            <span className="text-sm mb-4"><span className="text-red-500">*</span>Title:</span>

        </div>
	);
};

export default ReviewForm;
