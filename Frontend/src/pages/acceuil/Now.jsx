import React from 'react'
import laptop from '../acceuil/laptop.jpg'

const Now = () => {
  return (
    <div className=''>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ' >
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12   '>
          <div>
            <img  src={laptop} alt=''/>
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-[#45474B] font-semibold mb-4 md:w-4/5'>Register Now</h2>
           <p className='md:w-3/4 text-sm text-[#45474B] mb-8 '> loreum sjjsjsjdncazidajzdazoiajzdaozkdjqsdoasdjadqsdsldq
            qsdjqlsdjqlsdjqlksdjqlskdjqsldjqsldjqsldjbcscbqsqsdqlskdjqd
            qsdkqjsdlkqsjdlqsdjqlskdjqlskdjqlskdjqlsdjqsldkjqsdlqj
           </p>

           <button className=' py-2 px-5 bg-[#F4CE14] text-white font-semibold rounded-full shadow-md hover:bg-[#495E57] focus:outline-none focus:ring focus:ring-[#F5F7F8] focus:ring-opacity-75'>Get started </button>
          </div>
          
          </div> 
 
      </div>
    </div>
  )
}

export default Now
