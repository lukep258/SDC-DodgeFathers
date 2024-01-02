
export default function Header() {
    return (
        <div className="grid grid-cols-3 gap-4 bg-gray-100">
            <div role="tablist" className="flex content-start tabs ml-10">
                <a role="tab" className="tab tab-active font-bold bg-base-100" href="https://cobragolf.com/" aria-label="https://cobragolf.com/">
                    COBRA&nbsp;
                    <span className="font-normal">
                        GOLF
                    </span>
                </a>
                <a role="tab" className="tab tab-active font-bold hover:bg-gray-200" href="https://pumagolf.com" aria-label="https://pumagolf.com">
                    PUMA&nbsp;
                    <span className="font-normal">
                        GOLF
                    </span>
                </a>
            </div>
            <div className="flex justify-center font-light">FREE SHIPPING OVER $50</div>
        </div>
    )
}