const ReviewForm = () => {
	return (
        <div className="m-auto w-[75%] flex flex-col text-slate-500">
            <span className="font-semibold mb-8">WRITE A REVIEW</span>
            <span className="text-md mb-4"><span className="text-red-500 mr-1">*</span>Indicates a required field</span>
            <span className="text-sm mb-4"><span className="text-red-500 mr-1">*</span>Score:</span>
            <div className="rating ml-[-8px] mb-4">
                <input type="radio" name="rating-1" className="rating-hidden" checked/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
                <input type="radio" name="rating-1" className="mask mask-star"/>
            </div>
            <span className="text-sm mb-4"><span className="text-red-500 mr-1">*</span>Title:</span>
            <input type="text" className="border border-black mb-4 text-sm"/>
            <span className="text-sm mb-4"><span className="text-red-500 mr-1">*</span>Review:</span>
            <textarea name="review" rows="3" className="border border-black text-sm mb-4"></textarea>


            <div className="flex flex-row">
                
                <div className="text-sm flex flex-col justify-center items-center">Connect with:
                    <div className="flex flex-row gap-1 mt-4">
                        <div className="bg-[#6A6C77] hover:bg-neutral-500 hover:cursor-pointer w-11 h-8 flex justify-center items-center">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </div>
                        <div className="bg-[#6A6C77] hover:bg-neutral-500 hover:cursor-pointer w-11 h-8 flex justify-center items-center">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </div>
                    </div>
                    
                </div>

                <div className="flex justify-center items-center w-[10%]">-OR-</div>

                <div className="flex flex-col flex-grow mr-5">
                    <span className="mb-4 text-sm"><span className="text-red-500 mr-1">*</span>Use your name:</span>
                    <input type="text" className="border border-black w-[100%] text-lg"/>
                </div>
                <div className="flex flex-col flex-grow">
                    <span className="mb-4 text-sm"><span className="text-red-500 mr-1">*</span>Email:</span>
                    <input type="text" className="border border-black w-[100%] text-lg"/>
                </div>
                
            </div>
            <div className="flex flex-row justify-end mt-4">
                <div className="bg-black text-white w-32 h-8 flex items-center justify-center text-sm mb-20 hover:cursor-pointer">POST</div>
            </div>
        </div>
	);
};

export default ReviewForm;
