import React from 'react'

const Navbar = () => {
  return (
    <div className=' text-black flex items-center h-20 max-w-[1400px] mx-auto px-6'>
    <h1 className='w-full text-3xl font-bold text-[#ffc815]'>Hibou</h1>  
    <ul className='flex'>
        <a href=''className="acceuil">
        <li  className='p-3 hover:text-yellow-300'>Accueil</li>
        </a>
        <li className='p-3 hover:text-yellow-300'>Aide</li>
        <li className='p-3 hover:text-yellow-300'>contact</li>
        <a href='/Login'>
     <li className='py-3 px-3 rounded-2xl text-white bg-yellow-500 hover:text-black'>connecter</li>
     </a>
    </ul>

    </div>
  )
}

export default Navbar
