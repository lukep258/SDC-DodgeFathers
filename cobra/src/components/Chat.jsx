const Chat = () => {
    const handleClick = () => {
        console.log('open modal');
    }

    return (
        <div className="flex justify-end mr-4">
            <div className="bg-blue-900 flex flex-row shadow-slate-700 shadow-md pl-2 py-1 pr-3 cursor-pointer w-fit text-white rounded-l-full rounded-b-full  fixed bottom-5 right-5" onClick={handleClick}><img className="pr-1" src="https://assetscdn-wchat.freshchat.com/static/assets/help_icon.407f0467c911236190038c9631c321f8.svg" />Chat</div>
        </div>
    )
}

export default Chat