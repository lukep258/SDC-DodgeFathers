const Ad = () => {

    return (

        <div className="card lg:card-side flex items-center  justify-center bg-slate-50 py-14 w-full">
            <div className="ml-6 my-auto  w-1/2 flex-col h-full content-center">
                <img src="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/Arccos-Logo-200x38px-min.png?v=1654624688" alt="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/Arccos-Logo-200x38px-min"  />
                <div className="my-6 grid__item order--desktop-1 mr-">
                    <h1 className="card-title text-3xl mb-6">A Smarter Way to Improve Your Game</h1>
                    <p className="text-base leading-7">With the purchase of any COBRA club, you are eligible for free Arccos Smart Sensors to equip your set, and a free trial of the award-winning Arccos Caddie app.</p>
                </div>
                    <button className="btn text-base px-7 rounded-full bg-black text-white hover:bg-black " href="https://www.cobragolf.com/pages/arccos-caddie" id="adBtn">LEARN MORE</button>

            </div>
            <div className="mr-6">
                <img src="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/arccos-hero-760x690px-min.png?v=1654623112" alt="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/arccos-hero-760x690px-min"/>
            </div>
        </div>
    )
}

export default Ad