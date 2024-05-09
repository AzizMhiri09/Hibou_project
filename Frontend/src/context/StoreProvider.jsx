import React from 'react'
import { useReducer } from 'react'
import storeReducer from './storeReducer'
import storeContext from './storeContext'
import { decode_token } from '../utils'

const StoreProvider = ({children}) => {
  
  const [store , dispatch] = useReducer(storeReducer,{
    userInfo: decode_token(localStorage.getItem('token')) || "",
    token : localStorage.getItem('token') || ""
  })
    return <storeContext.Provider value={{store,dispatch} }>
    {children}
      
    </storeContext.Provider>
  
}

export default StoreProvider
