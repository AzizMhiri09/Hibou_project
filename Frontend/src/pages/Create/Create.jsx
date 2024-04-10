import React from 'react'
import Footer from '../components/Footer'
import Navvv from './Navvv'

const Create = () => {
  return (
    <div>
        <Navvv />
    <div className='px-6 sm:w-2/4 lg:w-1/2 mx-auto pb-8  '>
        <div className='bg-[#F0F1F1] rounded-lg shadow-2xl shadow-black mt-24 py-10 md:py-12 px-4 md:px-4 '>
      
        <form  className='px-4 w-full space-y-3'>
        <p>monitoring name : </p>
        <input className='border p-2 mr-7 text-black' type="text" placeholder='Monitoring name'/>
        <p>temps : </p>
        <select>
            <option value="30Mn">30Mn</option>
            <option value="1Hr">1Hr</option>
            <option value="1Hr30mn">1Hr30Mn</option>
            <option value="2Hr">2Hr</option>
        </select>
        <p> Browser Name</p>
        <select>
            <option value="Chrome">Chrome</option>
            <option value="Edge">Edge</option>
            <option value="FireFox">FireFox</option>
            <option value="Brave">Brave</option>
        </select>
        <p>Date : </p>
        <input type="date"placeholder='date'></input>
        <p>Type of device : </p>
        <select>
            <option value="Chrome">Desktop</option>
            <option value="Edge">Mobile</option>
            
        </select>
        <p>Screen Size</p>
        <input type='text' placeholder='Size' className='border p-2 mr-7 text-black'></input>
        </form>
  <div>
        <div className='mt-10 mx-10 space-y-6'>
          <div className='flex space-x-4 items-center'>
        
          
          
        <p className='text-1xl '>Scripting : </p>
          
          
         <button className='py-2 px-6 rounded-2xl text-white bg-[#45474B] hover:bg-[#F4CE14] font-semibold'>upload</button>
         </div>
         </div>
          
        </div>
        
        <div className='relative pb-6 pr-12'>
        <div className="absolute  right-0 top:20px space-x-4 ">
            
        <input type='submit' value='Cancel' className=' py-3 px-3 rounded-2xl text-white bg-[#F4CE14] hover:bg-[#45474B] font-semibold'/>
        <input type='submit' value='Save' className=' py-3 px-3 rounded-2xl text-white bg-[#F4CE14] hover:bg-[#45474B] font-semibold' />
        </div>
        </div>
        
        </div>
    </div>
  <Footer/>
</div>
  )
}

export default Create
