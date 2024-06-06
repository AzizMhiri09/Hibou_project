import React from 'react'


const Service = () => {
  const services = [

    {id : 1 , title: "Security",desciprtion : "Keep services reliable and resilient",image:"/src/pages/acceuil/growth.png"},
    {id:2 , title : "operation" , desciprtion:"operate efficiently and securely", image:"/src/pages/acceuil/coding.png"},
    {id : 3 , title : "Business",desciprtion : "Deliver experiences customers love",image : "/src/pages/acceuil/33.jpg"},

  ]
  
    return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className=' text-center my-8 bg-slate-50  '>
            <h2 className='text-4xl text-neutral-800 font-semibold mb-2'>Our clients</h2>
            <p className=' text-neutral-800 text-2xl' > we have been working with some fortune clients</p>
        
        <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
            <img src='/src/pages/acceuil/Altersis.png'alt=''/>
            <img src='/src/pages/acceuil/uik.png'alt=''/>
        </div>
        
        </div>
      
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
          <h2 className='text-4xl text-neutral-800 font font-semibold mb-3'>Give every team the power to test more with data</h2>
          <p className='text-neutral-800 text-1xl'> Break down silos and proactively prevent issues before they affect end users</p>

      </div>
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:w-11/12 mx-auto gap-12'> 
        {
            services.map(service =><div key={service.id} className='px-4 py-8 text-center md:w-[300px]
              mx-auto md:h-80 rounded-md shadow-2xl shadow-black cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-[#F4CE14] transition-all duration-300 flex items-center justify-center h-full '>
                <div>
                    <div className='bg-white h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl  '> <img src={service.image}alt="" className='ml-5'/> </div>
                    <h4 className='text-3xl font-bold text-neutral-700 mb-2 px-2'>{service.title}</h4>
                    <p className='text-2xl  text-neutral-800 '>{service.desciprtion}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Service
