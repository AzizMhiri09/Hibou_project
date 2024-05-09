import React from 'react'
import image from '../Create/user.jpg.webp'
import {Link , useLocation} from 'react-router-dom'
const NavBar = () => {
  
  const {pathname} = useLocation()
  
  return (
    
    <div className=' text-black flex items-center h-20 max-w-[1400px] mx-auto px-6'>
    <h1 className='w-full text-6xl font-bold text-[#F4CE14]'>Hibou</h1>  
    <ul className='flex'>
        <a href='/Support'className="font-meduim">
        <li  className='p-3 hover:text-[#F4CE14]'>
            Support 
        </li>
        </a>
        
           <li className='p-3  hover:text-[#F4CE14]'>Logout</li>
        
        
       
    </ul>

    </div>
  )
    
  
}
export default NavBar