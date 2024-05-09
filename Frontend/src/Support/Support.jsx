import React from 'react'
import img1 from '../Support/foret-removebg-preview.png'
import Footer from '../pages/components/Footer'
import NavBarr from './NavBarr'


const Support = () => {
  return (
    <div>
        <NavBarr/>
     <div className='min-h-screen py-40 bg-[#F5F7F8 ]'>
      <div className='container mx-auto '>
        <div className=' flex w-8/12 rounded-xl bg-[#F0F1F1] mx-auto shadow-lg shadow-black'>
          <div className='w-1/2'>

            <div>

            <img className='w-full h-full rounded-r-lg' src={img1} />



            </div>
          </div>
          <div className='w-1/2 py-16 px-12'>
            <h2 className='text-4xl mb-4 font-bold'>Contact Us</h2>
            <p className='mb-4 font-medium'>
              Do you have a question ? 
            </p>
            
            <form  >
             
             

              <div className='mt-5'>
               <textarea className='border border-yellow-400 py-1 px-2 w-full h-32 border-b-2 focus:outline-none' >

               </textarea>

              </div>
            
              <div className='mt-5'>
                <button className='w-full py-3 rounded-lg bg-[#F4CE14] hover:bg-[#495E57] text-white '>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </div>
    <Footer />
        </div>
    
  )
}

export default Support
