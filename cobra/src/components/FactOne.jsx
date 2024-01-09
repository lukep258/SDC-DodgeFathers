
const FactOne = () => {
    return (
        // background image styling done inline for ease of access ( api fetches for image urls )
        // styling is mixed between inline and index.css for responsiveness
        // if you want to refactor styling using tailwind, research tailwind's utility classes
        <div className="hero custom-hero " style={{backgroundImage: 'url(http://images.salsify.com/image/upload/s--35mrsC77--/7b8cc3ac2424f7186070c5e491b2b761bf5eb250.jpg)'}}>
            <div className="hero-content-wrapper">
                <div className="hero-content font-titillium" style={{width: '80%', padding: '0 100px'}}>
                    <div className="hero-content-inner-wrapper" style={{ padding: '20px 0' }}>
                        <h1 className="mb-5 text-3xl font-semibold">Faster By Design</h1>
                        <p>Seamlessly aerodynamic, boldly designed. COBRA AEROJET enables new levels of speed that 
                            were not believed to be possible until now.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FactOne;