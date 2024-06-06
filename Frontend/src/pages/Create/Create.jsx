import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Navvv from './Navvv'
import { base_url } from '../../utils/config'
import axios from 'axios'

import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'



const Create = () => {

const {store}= useContext(storeContext)

const [files , setFiles] = useState('')
  const [state , setState] = useState({
    MonitoringName : '',
    date : '',
    size : '',
    files :'',
    time : '',
    BrowserName : '',
    type :'',
    
  })
  
  const inputHandler = (e)=> {
    setState({
      ...state, 
      [e.target.name] : e.target.value 

    })
  }
  const fileHandle = (e)=>{
    if(e.target.files.length>0){
      setState({
        ...state , 
        files : e.target.files[0]
      })
      setFiles(URL.createObjectURL(e.target.files[0]))
    }  
  }   

  const add = async (e)=>{
   
    e.preventDefault()
     
    const formData = new FormData()
    formData.append('MonitoringName',state.MonitoringName)
     formData.append('date',state.date)
     formData.append('size',state.size)
     formData.append('time',state.time)
     formData.append('BrowserName',state.BrowserName)
   
    formData.append('files',state.files)
     formData.append('type',state.type)
    
    
    try{
    
      const {data} = await axios.post(`${base_url}/api/post/Create`,formData,{
        headers : {
        Authorization : `Bearer ${store.token}`
        }
      }) 
      toast.success(data.message)
     } catch ( error){
toast.error(error.response.data.message)
     }
     
  }

  


  return (
    <div>
        <Navvv />
    <div className='px-6 sm:w-2/4 lg:w-1/2 mx-auto pb-8  '>
        <div className='bg-[#F0F1F1] rounded-lg shadow-2xl shadow-black mt-24 py-10 md:py-12 px-4 md:px-4 '>
      
        <form  className='px-4 w-full space-y-3' onSubmit={add}  enctype="multipart/form-data" >
        <p>monitoring name : </p>
        <input className='border p-2 mr-7 text-black'
         type="text"
          id='MonitoringName'
          name='MonitoringName'
          placeholder='MonitoringName'
          onChange={inputHandler}
          value={state.MonitoringName}
        />
        <p>temps : </p>
        <select name='time' onChange={inputHandler} value={state.time}>
            <option value="30Mn">30Mn</option>
            <option value="1Hr">1Hr</option>
            <option value="1Hr30mn">1Hr30Mn</option>
            <option value="2Hr">2Hr</option>
        </select>
        <p> Browser Name</p>
        <select name='BrowserName' onChange={inputHandler} value={state.BrowserName}>
            <option value="Chrome">Chrome</option>
            <option value="Edge">Edge</option>
            <option value="FireFox">FireFox</option>
            <option value="Brave">Brave</option>
        </select >
        <p>Date : </p>
        <input type="date" name='date'onChange={inputHandler} value={state.date}/>
        <p>Type of device : </p>
        <select name='type' onChange={inputHandler} value={state.type}>
            <option value="Chrome">Desktop</option>
            <option value="Edge">Mobile</option>
            
        </select>
        <p>Screen Size</p>
        <input type='text'
        className='border p-2 mr-7 text-black'
        id='size'
        name='size'
        placeholder='ScreenSize'
        onChange={inputHandler}
                  value={state.size}/>
        
  <div>
        <div className='mt-10 mx-10 space-y-6'>
          <div className='flex space-x-4 items-center'>
        
          
          
        <p className='text-1xl '>Scripting : </p>
          
          
         <input  type='file'id='files'name='files' onChange={fileHandle} enctype="multipart/form-data" />
         
         {
          <h1 src={files} />
         } 
         </div>
         
         
         </div>
          
        </div>
        
        <div className='relative pb-6 pr-12'>
        <div className="absolute  right-0 top:20px space-x-4 ">

           
        <input type='submit' value='Cancel' className=' py-3 px-3 rounded-2xl text-white bg-[#F4CE14] hover:bg-[#45474B] font-semibold'/>
        <input type='submit' value='Save' className=' py-3 px-3 rounded-2xl text-white bg-[#F4CE14] hover:bg-[#45474B] font-semibold' />
        </div>
        </div>
       
        </form>
        </div>
    </div>
  <Footer/>
</div>
  )
}

export default Create
