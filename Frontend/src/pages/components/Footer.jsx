import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='max-w-[1555px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 tex-gray-300 bg-[#45474B]'>
      
    <div>
    <h1 className='w-full text-3xl font-bold text-[#ffc815]'>Hibou</h1> 
    <p className='text-white'>Le secret du succès en ligne: Testez votre performance dès maintenant.
     L'avenir de votre site commence ici: Testez votre performance web aujourd'hui</p>        

    <div className='flex md:w-[50%] my-8 justify-between'>
    <CiFacebook size={30}/>
    <FaInstagram size={30} />
    <CiLinkedin  size={30}/>
    
    </div>
    
    </div>
    <div className='lg:col-span-2 flex justify-between  mt-9 text-white'>
    <div>
        
        <ul>
            <h3 className='font-meduim font-bold'>Solution</h3>
            <li>aide</li>
            <li>contact</li>
            <li>aide</li>
            <li>contact</li>
            
        </ul>

    </div>
   
   
    <div>
        
        <ul>
            <h6 className='font-meduim font-bold'>Entreprise</h6>
            <li>Blog</li>
            <li>contact</li>
            <li>aide</li>
            <li>contact</li>
            
        </ul>

    </div>
    <div>
        
        <ul>
            <h6 className='font-meduim font-bold'>Légal</h6>
            <li>Politique</li>
            <li>contact</li>
            <li>Politique</li>
            <li>contact</li>
            
        </ul>

    </div>
    <div>
        
        <ul>
            <h6 className='font-meduim font-bold'>Solution</h6>
            <li>aide</li>
            <li>contact</li>
            <li>Politique</li>
            <li>contact</li>
            
        </ul>

    </div>
    </div>
    
    </div>
  )
}

export default Footer
