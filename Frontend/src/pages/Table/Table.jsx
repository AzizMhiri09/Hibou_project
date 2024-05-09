import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import { BsEyeFill } from "react-icons/bs"
import { BsFillPencilFill } from "react-icons/bs";
import Navvv from '../Create/Navvv';
import axios from 'axios';
import { base_url } from '../../utils/config';
import storeContext from '../../context/storeContext';



const Table = () => {
  const [posts, setPosts]=useState([])
  const [loader , setLoader]=useState(false)
  const stateData = useContext(storeContext)
  const get_my_post = async () =>{
  try {
     setLoader(true)
     const {data} = await axios.get(`${base_url}/api/post/Post`,{
      headers : {
    Authorization : `Bearer ${stateData.store.token}`
  }  
    })
    setLoader(false)
    setPosts(data.posts)
    console.log(data)
   }catch(error){
    console.log(error)
    setLoader(false )

   }
 
}
  
  useEffect(() =>{
    get_my_post()
  
  },[])
  
  
  return (
    <div>
      <Navvv />
      
      
 <div className='w-full h-full flex flex-col px-10 py-8'>
     
      
      <div className='w-full flex flex-col  h-full min-h-[50vh] justify-center items-center'>
      <h1 className='font-bold text-[#45474B] text-3xl'>
        Home Page
      </h1>
        <table className='w-[80%] text-center overflow-hidden overflow-y-scroll mt-8'>
            <thead className='border-b bg-[#495E57]'>
                <tr>
                    <th className='text-sm font-meduim text-white px-6 py-4'>
Monitoring Name
                    </th>
                    <th className='text-sm font-meduim text-white px-6 py-4'>
Date
                    </th>
                    <th className='text-sm font-meduim text-white px-6 py-4'>
Handle
                    </th>
                 
                     

                </tr>


            </thead>
            <tbody>
              <tr className='bg-white border-b'>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-meduim text-gray-900'>
test
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-meduim text-gray-900'>
test
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-meduim text-gray-900'>
               <span className='flex justify-center  gap-x-4'>
                <BsEyeFill/>
                <BsFillPencilFill />
                </span>
                </td>
               
               
              </tr>
            </tbody>

        </table>

      </div>


  </div>
<Footer/>
  </div> 
  )
}

export default Table
