const Klarna = () => {
return(
  <>
  <div className='flex flex-col justify-center bg-red-400'>
    <div className='absolute top-[30px] right-[734px] font-bold'>

    <button>
    <span class="material-symbols-outlined border-2 border-black inline-flex items-center justify-center h-8 w-8 rounded-full hover:border-transparent">
  close
</span>
    </button>
    

    </div>

    <div className='flex flex-col justify-center items-center bg-blue-400 w-60 mx-auto mt-10'>
    <svg aria-label="Klarna" role="img" class="badge" focusable="false" width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Klarna badge</title><rect width="48" height="24" rx="2" fill="#FFB3C7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M10.684 8h1.82a6.448 6.448 0 0 1-1.902 4.596l2.569 3.501h-2.295l-2.791-3.805.72-.54A4.648 4.648 0 0 0 10.684 8Zm24.725 5.296c0 .797.68 1.44 1.519 1.44.838 0 1.518-.643 1.518-1.44 0-.795-.68-1.44-1.518-1.44-.84 0-1.519.645-1.519 1.44Zm3.042-2.44v-.36h1.678v5.6H38.45v-.358a2.954 2.954 0 1 1 0-4.883ZM6 16.097h1.863V8H6v8.097Zm9.466-.002h-1.755V8h1.755v8.095Zm15.391-5.75c-.668 0-1.302.209-1.726.783v-.63h-1.669v5.597h1.69v-2.942c0-.851.57-1.268 1.259-1.268.735 0 1.16.44 1.16 1.257v2.953h1.673v-3.561c0-1.302-1.036-2.189-2.387-2.189Zm-13.131 2.95c0 .798.68 1.441 1.518 1.441.84 0 1.519-.643 1.519-1.44 0-.795-.68-1.44-1.519-1.44-.838 0-1.518.645-1.518 1.44Zm3.042-2.44v-.36h1.677v5.6h-1.677v-.357a2.954 2.954 0 1 1 0-4.883Zm4.27.371v-.729h-1.716v5.598h1.72v-2.614c0-.882.955-1.356 1.618-1.356h.02v-1.628c-.68 0-1.307.293-1.642.73Zm15.817 3.936a1.053 1.053 0 1 1 2.106-.001 1.053 1.053 0 0 1-2.106.001Z" fill="#17120F"></path></svg>
        <span> In collaboration with
            <span className='font-bold'> Cobra Golf</span>
        </span>
    </div>
        
    <div className='flex flex-col justify-center items-center bg-yellow-400 w-3/12 mx-auto'>
        <span className='font-bold text-3xl'>Buy now. Pay with Klarna at</span>
        <span className='font-bold text-3xl mb-2'>your own pace.</span>
        <span className='mb-5'>Get what you love, choose how you pay.</span>
        <span className='font-semibold relative left-[-200px]'>Pay now</span>
        <div className='h-16 w-[460px] bg-gray-400 flex flex-row justify-between items-center px-4'>
          <span className='font-semibold text-xl'>$449.00</span>
          <div className='h-5 w-20 bg-green-400 flex justify-center items-center rounded-xl'>
            <span className='text-sm'>Pay in full</span>
          </div>
        </div>
    </div>




  </div>    
</>  
)

}

export default Klarna 