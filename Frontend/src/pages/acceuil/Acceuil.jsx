

import image from '../acceuil/oo.jpg'
import React from 'react'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import Service from '../acceuil/Service'
import Now from '../acceuil/Now'



const Acceuil = () => {
  return (
    
    <div>
        <Navbar />
    <div className='flex justify-between'>
    <div className='w-1/2 text-black flex flex-col  items-center text-4xl justify-center'>
    <h1 className='text-6xl font-mono ' >testez pour réussir !</h1>
    <p className='font-mono  '>Boostez votre performance</p>
    <div className='flex my-2 space-x-8'>
    <a className='py-2 px-6 rounded-full text-white bg-[#495E57] hover:bg-[#45474B] m-3 '>Get Started</a>
    <a className='py-2 px-6 rounded-full text-white bg-[#495E57] hover:bg-[#45474B] m-3 '>Free Trial</a>
    </div>
    </div>
    <img  className='w-96 'src={image} alt='bird'/>
    </div>
<div>
  <Service/>
</div>
    
      
   <div>
    <Now />
   </div>
   
    
   
    
    
      
    <Footer />
  </div>
  )
}

export default Acceuil
