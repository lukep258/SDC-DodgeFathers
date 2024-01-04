const RelatedProducts = () => {
return (
    <>
    <div className='flex justify-center mt-10'>
        <div>
        <div className='border-b mx-30'>
          <h1 className='text-3xl mb-1'>Related Products</h1>  
        </div>
        
         <ul className='flex flex-row'>
            <li className="pr-4 mb-2 w-3/12">
                <div className='overflow-hidden'>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/products/jqk57ckqfgp5yldo1uts_533x.jpg?v=1702389178" className='hover:scale-105 transition-transform duration-300 ease-in-out'></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl relative bottom-10 left-4'>
                    <span className='text-white'>Sale</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>AEROJET LS 50th Anniversary - Limited Edition</span>
                    <span className='mb-10'>2023 Driver</span>
                </div>
                <div>
                    <s className='pr-2'>$599.00</s>
                    <span>$449.00</span>
                </div>
            </li>
            
            <li className="pr-4 mb-2 w-3/12">
                <div className='overflow-hidden'>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/products/693abb0998f9dd29c4a62dbe097de5d0d59a1dfe_533x.jpg?v=1702992233" className='hover:scale-105 transition-transform duration-300 ease-in-out'></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl relative bottom-10 left-4'>
                    <span className='text-white'>Sale</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>Tri-Fold</span>
                    <span className='mb-10'>Golf Towel</span>
                </div>
                <div>
                    <s className='pr-2'>$20.00</s>
                    <span>$12.00</span>
                </div>
            </li>

            <li className="pr-4 mb-2 w-3/12">
                <div className='overflow-hidden'>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/files/up3jekd1igeekd7nedd4_533x.jpg?v=1702389275" className='hover:scale-105 transition-transform duration-300 ease-in-out'></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl relative bottom-10 left-4'>
                    <span className='text-white'>Sale</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>AEROJET Volition - Limited Edition</span>
                    <span className='mb-10'>2023 Driver</span>
                </div>
                <div>
                    <s className='pr-2'>$599.00</s>
                    <span>$449.00</span>
                </div>
            </li>
         </ul>
        </div>
        
    </div>
    
    
    </>
)
}

export default RelatedProducts