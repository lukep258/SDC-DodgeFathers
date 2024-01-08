const Klarna = () => {
return(
  <>
  
    <div className='absolute top-[50px] right-[700px] font-bold'>

    <button>
    <span class="material-symbols-outlined border-2 border-black inline-flex items-center justify-center h-8 w-8 rounded-full hover:border-transparent">
  close
</span>
    </button>
    

    </div>

    <div className='flex flex-col justify-center items-center bg-white w-3/12 h-[60px] mx-auto mt-10'>
    <svg aria-label="Klarna" role="img" focusable="false" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Klarna badge</title><rect width="48" height="24" rx="2" fill="#FFB3C7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M10.684 8h1.82a6.448 6.448 0 0 1-1.902 4.596l2.569 3.501h-2.295l-2.791-3.805.72-.54A4.648 4.648 0 0 0 10.684 8Zm24.725 5.296c0 .797.68 1.44 1.519 1.44.838 0 1.518-.643 1.518-1.44 0-.795-.68-1.44-1.518-1.44-.84 0-1.519.645-1.519 1.44Zm3.042-2.44v-.36h1.678v5.6H38.45v-.358a2.954 2.954 0 1 1 0-4.883ZM6 16.097h1.863V8H6v8.097Zm9.466-.002h-1.755V8h1.755v8.095Zm15.391-5.75c-.668 0-1.302.209-1.726.783v-.63h-1.669v5.597h1.69v-2.942c0-.851.57-1.268 1.259-1.268.735 0 1.16.44 1.16 1.257v2.953h1.673v-3.561c0-1.302-1.036-2.189-2.387-2.189Zm-13.131 2.95c0 .798.68 1.441 1.518 1.441.84 0 1.519-.643 1.519-1.44 0-.795-.68-1.44-1.519-1.44-.838 0-1.518.645-1.518 1.44Zm3.042-2.44v-.36h1.677v5.6h-1.677v-.357a2.954 2.954 0 1 1 0-4.883Zm4.27.371v-.729h-1.716v5.598h1.72v-2.614c0-.882.955-1.356 1.618-1.356h.02v-1.628c-.68 0-1.307.293-1.642.73Zm15.817 3.936a1.053 1.053 0 1 1 2.106-.001 1.053 1.053 0 0 1-2.106.001Z" fill="#17120F"></path></svg>
        <span> In collaboration with
            <span className='font-bold'> Cobra Golf</span>
        </span>
    </div>
        
    <div className='flex flex-col justify-center items-center bg-[#f0f1f1] w-[550px] mx-auto'>
        <span className='font-bold text-[28px]'>Buy now. Pay with Klarna at</span>
        <span className='font-bold text-[28px] mt-[-10px] mb-2'>your own pace.</span>
        <span className='mb-5'>Get what you love, choose how you pay.</span>
        <span className='font-semibold relative left-[-195px]'>Pay now</span>
        <div className='h-16 w-[460px] bg-white flex flex-row justify-between items-center px-4 rounded-xl mb-4'>
          <span className='font-semibold text-xl'>$449.00</span>
          <div className='h-5 w-[70px] bg-green-300 flex justify-center items-center rounded-xl'>
            <span className='text-[12px] font-medium'>Pay in full</span>
          </div>
        </div>
        <span className='font-semibold relative left-[-180px]'>Pay over time</span>
        <div className='h-16 w-[460px] bg-white flex flex-row justify-between items-center px-4 rounded-tl-xl rounded-tr-xl'>
          <div className='flex flex-col w-30 h-12'>
            <span className='font-semibold text-xl mb-3'>$112.25</span>
            <span className='text-xs'>Every 14 days</span>
          </div>
          <div className='h-5 w-[55px] bg-blue-200 flex justify-center items-center rounded-xl'>
            <span className='text-[12px] font-medium'>Pay in 4</span>
          </div>
        </div>
        <div className='h-16 w-[460px] bg-white flex flex-row justify-between items-center px-20 py-[50px]'>
          <div className='flex flex-col text-xs items-center'>
          <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#E5E5E9"></circle><path d="M15 0C16.9698 2.349e-08 18.9204 0.387987 20.7403 1.14181C22.5601 1.89563 24.2137 3.00052 25.6066 
      4.3934C26.9995 5.78628 28.1044 7.43987 28.8582 9.25975C29.612 11.0796 30 13.0302 30 15L15 15L15 0Z" fill="#1892F2"></path></svg>
          <span>112.25</span>
          <span>Today</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
          <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#E5E5E9"></circle><path d="M15.5 0C17.4698 2.349e-08 19.4204 0.387987 21.2403 1.14181C23.0601 1.89563 24.7137 3.00052 26.1066 4.3934C27.4995 
      5.78628 28.6044 7.43987 29.3582 9.25975C30.112 11.0796 30.5 13.0302 30.5 15C30.5 16.9698 30.112 18.9204 29.3582 20.7403C28.6044 
      22.5601 27.4995 24.2137 26.1066 25.6066C24.7137 26.9995 23.0601 28.1044 21.2402 28.8582C19.4204 29.612 
      17.4698 30 15.5 30L15.5 15L15.5 0Z" fill="#1892F2"></path></svg>
          <span>112.25</span>
          <span>In 2 weeks</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
          <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#E5E5E9"></circle><path d="M15 0C17.9667 3.53778e-08 20.8668 0.879735 23.3336 2.52796C25.8003 4.17618 27.7229 6.51886 28.8582 9.25975C29.9935 
      12.0006 30.2906 15.0166 29.7118 17.9264C29.133 20.8361 27.7044 23.5088 25.6066 25.6066C23.5088 27.7044 20.8361 29.133 17.9264 
      29.7118C15.0166 30.2906 12.0006 29.9935 9.25975 28.8582C6.51886 27.7229 4.17618 25.8003 2.52796 23.3336C0.879734 
      20.8668 -7.07556e-08 17.9667 0 15L15 15L15 0Z" fill="#1892F2"></path></svg>
          <span>112.25</span>
          <span>In 4 weeks</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
          <svg width="31" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15.5" cy="15" r="15" fill="#E5E5E9"></circle><circle cx="15.5" cy="15" r="15" fill="#1892F2"></circle></svg>
          <span>112.25</span>
          <span>In 6 weeks</span>
          </div>
        </div>
        <div className='h-16 w-[460px] bg-white flex flex-row justify-between items-center mb-4 px-4 rounded-bl-xl rounded-br-xl border-t-[1px] border-gray-200'>
          <div className='flex flex-col text-xs items-center'>
            <span>APR</span>
            <span className='font-bold'>0%</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
            <span>Interest</span>
            <span className='font-bold'>Free</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
            <span>Total</span>
            <span className='font-bold'>$449.00</span>
          </div>
        </div>
        <p className='px-[30px] flex flex-wrap'>
          <span className='text-xs px-5 leading-5 mb-7'> A higher initial payment may be required for some consumers. CA residents: Loans made or arranged pursuant to a California Financing Law license. See payment&nbsp;
            <a aria-label="terms (Opens in a new window)" class="legal-link underline" href="https://cdn.klarna.com/1.0/shared/content/legal/terms/0/en_us/sliceitinx" target="_blank">terms</a>
          .</span>
        </p>
        <div className='h-[100px] w-[460px] bg-white flex flex-row justify-between items-center px-4 rounded-tl-xl rounded-tr-xl'>
          <div className='flex flex-col w-30 h-12 mb-1'>
            <span className='font-semibold text-xl mb-1'>$79.26</span>
            <span className='text-xs'>Every month</span>
          </div>
          <div className='h-5 w-[80px] bg-blue-200 flex justify-center items-center rounded-xl mt-[-23px]'>
            <span className='text-[12px] font-medium'>6 payments</span>
          </div>
        </div>
        <div className='h-[50px] w-[460px] bg-white flex flex-row justify-between items-center rounded-br-xl rounded-bl-xl mb-4 border-t-[1px] border-gray-200 px-3'>
          <div className='flex flex-col text-xs items-center'>
            <span>APR</span>
            <span className='font-bold'>19.99%</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
            <span>Total</span>
            <span className='font-bold'>$449.00</span>
          </div>
        </div>
        <div className='h-[100px] w-[460px] bg-white flex flex-row justify-between items-center px-4 rounded-tl-xl rounded-tr-xl'>
          <div className='flex flex-col w-30 h-12'>
            <span className='font-semibold text-xl mb-3'>$41.59</span>
            <span className='text-xs'>Every month</span>
          </div>
          <div className='h-5 w-[80px] bg-blue-200 flex justify-center items-center rounded-xl mt-[-23px]'>
            <span className='text-[12px] font-medium'>12 payments</span>
          </div>
        </div>
        <div className='h-16 w-[460px] bg-white flex flex-row justify-between items-center rounded-br-xl rounded-bl-xl mb-4 border-t-[1px] border-gray-200 px-3'>
          <div className='flex flex-col text-xs items-center'>
            <span>APR</span>
            <span className='font-bold'>19.99%</span>
          </div>
          <div className='flex flex-col text-xs items-center'>
            <span>Total</span>
            <span className='font-bold'>$449.00</span>
          </div>
        </div>
        <p className='flex flex-wrap px-7'>
          <span className='text-xs px-5 leading-6'> Rate ranges from 7.99%-33.99% APR. A down payment may be required. Estimation excludes potential tax and shipping costs. Monthly financing through Klarna issued by WebBank, member FDIC and subject to credit approval.&nbsp;
          <a aria-label="Terms and conditions (Opens in a new window)" class="legal-link underline" href="https://www.klarna.com/us/legal/" target="_blank">Terms and conditions</a>
          .</span>
        </p>
        <span className='text-2xl font-bold mt-7 mb-7'>How it works</span>
        
        <div className='bg-white h-[300px] w-[460px] rounded-xl px-5 flex flex-col justify-center'>
          <div className='flex flex-row bg-white h-[100px] w-[400px] mt-10'>
            <div className='mt-[1px]'>
            <svg aria-hidden="true" focusable="false" role="img" width="10" height="10"><rect fill="rgba(14, 14, 15, 1)" width="10" height="10"></rect></svg>
            <div className="relative left-[4px] h-[39px] bg-gray-300 w-0.5"></div>
            </div>
            <div className='ml-4 mt-[-4px]'>
              <p className='font-semibold'>At checkout select Klarna</p>
            </div>
          </div>

          <div className='flex flex-row bg-white h-[100px] w-[400px] mt-[-50px]'>
            <div>
            <svg aria-hidden="true" focusable="false" role="img" width="10" height="10"><rect fill="rgba(14, 14, 15, 1)" width="10" height="10"></rect></svg>
            <div className="relative left-[4px] h-[70px] bg-gray-300 w-0.5"></div>
            </div>
            <div className='ml-4 mt-[-4px]'>
              <p className='font-semibold'>Choose your payment plan</p>
              <p>Different payment plans may be shown depending on the purchase amount and credit score.</p>
            </div>
          </div>

          <div className='flex flex-row bg-white h-[100px] w-[400px] mt-[-20px]'>
            <div>
            <svg aria-hidden="true" focusable="false" role="img" width="10" height="10"><rect fill="rgba(14, 14, 15, 1)" width="10" height="10"></rect></svg>
          
            </div>
            <div className='ml-4 mt-[-4px]'>
              <p className='font-semibold'>Complete your checkout</p>
              <p>The amount will be charged based on the payment plan you chose.</p>
              
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-stone-950 h-[50px] w-[470px]'>
          <div className='text-white'>Close</div>
        </div>
    </div>




    
</>  
)

}

export default Klarna 