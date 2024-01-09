import CobraClub from '../assets/cobra-club.js'

const CustomClub = () => {
    return (
        <>
        <div className='mt-5 collapse-content'>
                            <button className="mb-8 w-full h-10 bg-gray-200 text-black rounded-full uppercase font-bold text-[9px] border border-black hover:border-2 hover:transition-all hover:duration-150">Customize This Club</button>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined scale-75">ink_eraser</span>
                                <p className="text-[8px] uppercase font-roboto font-bold hover:text-blue-700 hover:underline">reset all</p>
                                <span className="material-symbols-outlined scale-75">close</span>
                                <p className="text-[8px] uppercase font-roboto font-bold hover:text-blue-700 hover:underline">cancel customization</p>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                <p className="font-semibold text-[10px]">Custom Shaft</p>
                                    <select className="select select-sm w-full mt-2  border-gray-400 rounded-none text-[7px] focus:border-white focus:ring-1 focus:ring-white">
                                        <option className='bg-white text-black' disabled selected>
                                        Choose an Option
                                        </option>
                                        {CobraClub.CustomShaft.map((option, index) => (
                                        <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[10px]">Shaft Length</p>
                                    <select className="select select-sm w-full mt-2 ] border-gray-400 rounded-none text-[7px] ">
                                        <option className='bg-white text-black' disabled selected>
                                        Choose an Option
                                        </option>
                                        {CobraClub.ShaftLength.map((option, index) => (
                                        <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[10px]">Grip Type</p>
                                    <select className="select select-sm mt-2 w-full border-gray-400 rounded-none text-[7px] ">
                                        <option className='bg-white text-black' disabled selected>
                                        Choose an Option
                                        </option>
                                        {CobraClub.GripType.map((option, index) => (
                                        <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex flex-col">
                                        <p className="font-semibold text-[10px]">Grip</p>
                                        <select className="select select-sm mt-2 w-full border-gray-400 rounded-none text-[7px] ">
                                        <option className='bg-white text-black' disabled selected>
                                        Choose an Option
                                        </option>
                                        {CobraClub.Grip.map((option, index) => (
                                        <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="flex flex-col">
                                        <p className="font-semibold text-[10px]">Grip Options</p>
                                        <select className="select select-sm mt-2 w-full border-gray-400 rounded-none text-[7px] ">
                                        <option className='bg-white text-black' disabled selected>
                                        Choose an Option
                                        </option>
                                        {CobraClub.GripOptions.map((option, index) => (
                                        <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default CustomClub
