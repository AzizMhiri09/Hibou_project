
import img2 from './components/oo.jpg'
import React, { useState } from 'react'
import axios from 'axios'
import { base_url } from '../utils/config'
import {toast} from 'react-hot-toast'
import Footer from './components/Footer'

const Login = () => {
 
 
 
  const [state , setState] = useState({
    
    email : '',
    password : ''
  })
  const inputHandler = (e)=> {
    setState({
      ...state, 
      [e.target.name] : e.target.value 
    })
  }
 const submit =  async(e)=>{
    e.preventDefault()
    try{
      const{data} = await axios.post(`${base_url}/api/auth/user/Login`, state)
     localStorage.setItem('token',data.token)
     toast.success(data.message)
    }catch(error){
          console.log(error) 
          toast.error(error.response.data.message)
    }
  }
 
 
 
  return (
    <div>
     
    <div className='w-full h-screen flex'>
    
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-2xl shadow-black sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden:md-block '> 
        <img className='w-full h-full rounded-r-lg' src={img2} />
            </div>
            <div className='p-4 flex flex-col justify-around'>
            <form  onSubmit={submit}>
                <h2 className='text-4xl font-bold text-center mb-8 text-[#495E57]'>Login</h2>
                <div>
            <input className='border p-2 mr-2 text-black' 
                    type="email" 
                    placeholder='email'
                    onChange={inputHandler}
                  value={state.email}
                  name='email'
                  id='email' 
                   
                   
                    required/>
            
            <input className='border p-2 mr-2 text black '
              type="password"
              placeholder='password'              
                  onChange={inputHandler}
                  value={state.password}
                  name='password'
               />
                
        </div>
       <div className='text-2xl absolute top-1 right-1'> 
        
       </div>
        
        <button className='w-full py-2 my-4 text-white bg-[#F4CE14] hover:bg-[#45474B]'>sign In</button>
        <p className='text-center text-black underline'> forgot your password ?</p>
        </form>
        <p className='text-center text-black underline'>sign Up</p>
        </div>
</div>
   </div>
   <Footer />
      </div>
    
  )
}

export default Login

