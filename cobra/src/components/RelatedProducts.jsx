const RelatedProducts = () => {
return (
    <>
    <div>
        <div className='border-b mx-24'>
          <h1 className='text-3xl'>Related Products</h1>  
        </div>
        
         <ul>
            <li className="bg-red-200 p-4 mb-2">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/products/jqk57ckqfgp5yldo1uts_533x.jpg?v=1702389178"></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl'>
                    <span>Sale</span>
                </div>
                <div>
                    <span>AEROJET LS 50th Anniversary - Limited Edition</span>
                    <span>2023 Driver</span>
                </div>
                <div>
                    <s>$599.00</s>
                    <span>$449.00</span>
                </div>
            </li>
            
            <li className="bg-orange-200 p-4 mb-2">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/products/693abb0998f9dd29c4a62dbe097de5d0d59a1dfe_533x.jpg?v=1702992233"></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl'>
                <span>Sale</span>
                </div>
                <div>
                    <span>Tri-Fold</span>
                    <span>Golf Towel</span>
                </div>
                <div>
                    <s>$20.00</s>
                    <span>$12.00</span>
                </div>
            </li>

            <li className="bg-yellow-200 p-4 mb-2">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0634/7833/3657/files/up3jekd1igeekd7nedd4_533x.jpg?v=1702389275"></img>
                </div>
                <div className='bg-yellow-400 w-14 flex justify-center rounded-xl'>
                    <span>Sale</span>
                </div>
                <div>
                    <span>AEROJET Volition - Limited Edition</span>
                    <span>2023 Driver</span>
                </div>
                <div>
                    <s>$599.00</s>
                    <span>$449.00</span>
                </div>
            </li>
         </ul>
    </div>
    
    
    </>
)
}

export default RelatedProducts