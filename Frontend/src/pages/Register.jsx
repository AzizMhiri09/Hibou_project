import React, { useState } from 'react'
import axios from 'axios'
import { base_url } from '../utils/config'
import {toast} from 'react-hot-toast'
import img1 from './components/ii.jpg' 
import Nav from './components/Nav'
import Footer from './components/Footer'

const Register = () => {
  
  const [state , setState] = useState({
    username : '',
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
      const{data} = await axios.post(`${base_url}/api/auth/user/register`, state)
     localStorage.setItem('token',data.token)
     toast.success(data.message)
    }catch(error){
          console.log(error) 
          toast.error(error.response.data.message)
    }
  }

   
  return (
    
    
    <div>
      <Nav />
     <div className='min-h-screen py-40  bg-[#F5F7F8 ]'>
      <div className='container mx-auto '>
        <div className=' flex w-8/12 bg-[#F0F1F1] rounded-xl mx-auto shadow-lg shadow-black'>
          <div className='w-1/2'>

            <div>

            <img className='w-full h-full rounded-r-lg' src={img1} />



            </div>
          </div>
          <div className='w-1/2 py-16 px-12'>
            <h2 className='text-3xl mb-4 font-bold'>Register</h2>
            <p className='mb-4'>
              Create your account , its only take a minute
            </p>
            <form  onSubmit={submit}>
              <div className='grid  gap-5 w-full'>
                <input
                  type='text'
                  onChange={inputHandler}
                  value={state.username}
                  name='username'
                  id='username'
                  
                  placeholder='username'
                  className='border border-yellow-400 py-1 px-2 w-full' />

              </div>
              <div className='mt-5'>
                <input
                  type='email'
                  onChange={inputHandler}
                  value={state.email}
                  name='email'
                  id='email'            
                  required
                  placeholder='Email'
                  className='border border-yellow-400 py-1 px-2 w-full' />

              </div>

              <div className='mt-5'>
                <input
                  type='password'
                  onChange={inputHandler}
                  value={state.password}
                  name='password'
                  id='password'
                  required
                  placeholder='Mot de passe'
                  className='border border-yellow-400 py-1 px-2 w-full' />

              </div>
              <div className='mt-5'>
                <input type='checkbox' className='border border-gray-600' />
                <span className='mt-5'>
                  j'accepte <a href='#' className='text-[#495E57] underline'> les conditions d'utilisation </a> & <a href='#' className='text-[#495E57] underline'> la politique de confidentialité </a>
                </span>

              </div>
              <div className='mt-5'>
                <button className='w-full py-3 rounded-lg bg-[#F4CE14] hover:bg-[#495E57] text-white '>Continuer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </div>
    <Footer/>
        </div>
    
  )
  }


export default Register
