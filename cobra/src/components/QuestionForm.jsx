
const QuestionForm = () => {
    return (
        <div className="m-auto w-[75%] flex flex-col text-slate-500">
            <span className="font-semibold mb-8 text-slate-700">ASK A QUESTION</span>
            <span className="text-md mb-4"><span className="text-red-500 mr-1">*</span>Indicates a required field</span>
            <span className="text-sm mb-4"><span className="text-red-500 mr-1">*</span>Question:</span>
            <textarea name="question" rows="3" className="border border-black text-sm mb-4"></textarea>
            <div className="flex flex-row">
                <div className="askAQuestion-spacer flex flex-grow"></div>
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
    )
}

export default QuestionForm;