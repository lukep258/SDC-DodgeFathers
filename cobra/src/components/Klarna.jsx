const Klarna = () => {
return(
  <>
  <div className='flex flex-col bg-red-400'>
    <div className='absolute top-[30px] right-[734px] font-bold'>

    <button>
    <span class="material-symbols-outlined border-2 border-black inline-flex items-center justify-center h-8 w-8 rounded-full hover:border-transparent">
  close
</span>
    </button>
    

    </div>

    <div className='flex flex-col justify-center items-center bg-blue-400 w-60 mx-auto mt-10'>
        <span> In collaboration with
            <span className='font-bold'> Cobra Golf</span>
        </span>
    </div>
        
    <div className='flex flex-col justify-center items-center bg-yellow-400 w-3/12 mx-auto'>
        <span className='font-bold text-3xl'>Buy now. Pay with Klarna at</span>
        <span className='font-bold text-3xl'>your own pace.</span>
        <span>Get what you love, choose how you pay.</span>
    </div>




  </div>    
</>  
)

}

export default Klarna 