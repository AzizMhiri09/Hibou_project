import React from 'react'
import image from '../Create/user.jpg.webp'

const Navvv = () => {
  return (
    
    <div className=' text-black flex items-center h-20 max-w-[1400px] mx-auto px-6'>
    <h1 className='w-full text-3xl font-bold text-[#F4CE14]'>Hibou</h1>  
    <ul className='flex'>
        <a href=''className="font-meduim">
        <li  className='p-3 hover:text-[#F4CE14]'>Accueil</li>
        </a>
        <li className='p-3 hover:text-[#F4CE14]'>Aide</li>
        <li className='p-3  font-bold'>User</li>
        <a href='/'>
        <img  className='w-24 'src={image} />
     </a>
    </ul>

    </div>
  )
    
  
}

export default Navvv
