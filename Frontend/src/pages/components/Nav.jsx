import React from 'react'
import{ useLocation } from 'react-router-dom'


const Nav = () => {
  const {pathname} = useLocation()
  return (
    <div>
    <div className=' text-black flex items-center h-20 max-w-[1400px] mx-auto px-6 space-y-4'>
      
  <button className=' mt-20 text-lg font-medium text-white border-2 bg-[#F4CE14] border-yellow-400 px-7 py-3 rounded-full relative group overflow-hidden'>  
  <span className='absolute left-0 w-full h-0 transition-all bg-[#495E57] text-white opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease  '></span>
         
  <span className='absolute left-0 items-center flex justify-start w-full h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>


      </span> 
      <a href='/Acceuil'>      
         <span className='relative'>retour</span>     
         </a>
   </button>

       
 <ul className=' '>
  <li className='absolute top-0 right-0 w-16 h-14 mt-16 mr-40 text-5xl font-bold text-[#ffc815]'>Hibou</li>
 </ul> 
  
  

  
  </div>
  </div>
  
  )
}

export default Nav
