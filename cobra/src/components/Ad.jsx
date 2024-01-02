const Ad = () => {

    return (
        <div className="card lg:card-side flex items-center justify-center bg-slate-50 py-14 w-full">
            <div className="ml-6 w-1/2 flex-col h-full content-center">
                <img src="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/Arccos-Logo-200x38px-min.png?v=1654624688" alt="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/Arccos-Logo-200x38px-min"  />
                <div className="my-6 grid__item order--desktop-1">
                    <h1 className="card-title text-3xl mb-6">A Smarter Way to Improve Your Game</h1>
                    <p className="text-base">With the purchase of any COBRA club, you are eligible for free Arccos Smart Sensors to equip your set, and a free trial of the award-winning Arccos Caddie app.</p>
                </div>
                    <button className="btn btn-lg rounded-full bg-black text-white hover:bg-black hover:text-blue ">Learn More</button>
            </div>
            <div className="mr-6">
                <img src="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/arccos-hero-760x690px-min.png?v=1654623112" alt="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/arccos-hero-760x690px-min"/>
            </div>
        </div>
    )
}

export default Ad