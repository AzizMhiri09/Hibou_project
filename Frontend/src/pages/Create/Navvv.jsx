import React, { useContext } from 'react'
import image from '../Create/user.jpg.webp'
import {Link , Navigate, useLocation, useNavigate} from 'react-router-dom'
import storeContext from '../../context/storeContext'
const Navvv = () => {
  const Navigate = useNavigate()
  const{store,dispatch}= useContext(storeContext)
  const {pathname} = useLocation()

  const logout =() =>{
    localStorage.removeItem('token')
    dispatch({type : 'logout' , payload: ''})
    Navigate('/Login')
    
    
  }
  
  return (
    
    <div className=' text-black flex items-center h-20 max-w-[1400px] mx-auto px-6'>
    <h1 className='w-full text-3xl font-bold text-[#F4CE14]'>Hibou</h1>  
    <ul className='flex'>
       
        <a href=''className="font-meduim"/>
        <li  className={`p-3 ${pathname === '/Acceuil'} hover:text-[#F4CE14]`}>
        <Link to='/Acceuil'> Acceuil</Link>
       
        </li>

        
         {
           store.userInfo ? <li onClick={logout} className={`p-3  hover:text-[#F4CE14] ${pathname==='/Login'}`}>
            
            <span>Logout</span>
      
      </li>  : <li className={`${pathname ==='/Login'}`}>
        <Link to='/login'> </Link>
         </li>
        
          
         }
    </ul>
         
    </div>

  )
    
  
}

export default Navvv
