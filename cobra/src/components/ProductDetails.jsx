import React, { useState } from 'react';

const ProductDetails = () => {
    const [selectedHand, setSelectedHand] = useState('Right');
    const [selectedLoft, setSelectedLoft] = useState('9.0');

    const handleHandClick = (value) => {
        setSelectedHand(value);
    };

    const handleLoftClick = (value) => {
        setSelectedLoft(value);
    };

    return (
        <>
            <div className="w-2/5 flex justify-center border border-black">
                <div className="product-details flex-column border border-black w-[250px] p-1">
                    <header className="m-1 text-2xl font-semibold"> AEROJET 50th Anniversary Driver - Limited Edition</header>
                    <p><span className="line-through text-sm">$599.00</span> <span className="font-bold text-lg">$449.00</span></p>
                    <p className="my-4">4 interest-free payments of $112.25 with <b>Klarna.</b> <u>Learn More</u></p>
                    <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                    <p className="mx-1 my-5 text-[11px]">The COBRA AEROJET 50th Anniversary Limited Edition Driver was designed to celebrate our fans,
                        players, and all golf enthusiasts. Bold design, alongside next-level innovations,
                        provide the most thrilling on-course experience. Go ahead, take a rip.</p>
                    <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                    <p className="text-[8px]">Hand</p>
                    <div className="flex flex-row gap-2 p-1 py-2">
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedHand === 'Right' ? 'bg-black text-white' : 'bg-white'} text-[8px] px-4`}
                            onClick={() => handleHandClick('Right')}
                        >
                            Right
                        </button>
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedHand === 'Left' ? 'bg-black text-white' : 'bg-white'} text-[8px] px-4`}
                            onClick={() => handleHandClick('Left')}
                        >
                            Left
                        </button>
                    </div>
                    <p className="text-[8px]">Loft</p>
                    <div className="flex flex-row gap-2 p-1 py-2">
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedLoft === '9.0' ? 'bg-black text-white' : 'bg-white'} text-[8px] px-4`}
                            onClick={() => handleLoftClick('9.0')}
                        >
                            9.0
                        </button>
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedLoft === '10.5' ? 'bg-black text-white' : 'bg-white'} text-[8px] px-4`}
                            onClick={() => handleLoftClick('10.5')}
                        >
                            10.5
                        </button>
                    </div>
                    <p className="text-[8px] font-bold">Shaft Flex</p>
                    <div className="flex justify-center">
                    <select className="select select-xs mt-2 w-[19rem] border-gray-400 rounded-none text-[7px] focus:border-white focus:ring-1 focus:ring-white">
                                <option className='bg-white text-black' disabled selected>Choose an Option</option>
                                <option className='bg-white text-black'>Graphic Lite</option>
                                <option className='bg-white text-black'>Graphic Regular</option>
                                <option className='bg-white text-black'>Graphic Stiff</option>
                                <option className='bg-white text-black'>Graphic X-Stiff</option>
                    </select>
                    </div>
                    <div className="qty-container flex flex-row items-center gap-2 my-2">
                         <p className="text-[8px] font-bold">QTY</p>
                         <input type="text" placeholder="" className="input input-bordered w-[2rem] h-[2rem] rounded-none" />
                         <button className="btn"></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;