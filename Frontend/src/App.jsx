import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import Nav from './pages/components/Nav'
import Acceuil from './pages/acceuil/Acceuil'
import Create from './pages/Create/Create'
import Table from './pages/Table/Table'
import Support from './Support/Support'

function App() {


  return (
   <> 
   <BrowserRouter>
   <Routes>
    <Route path='/Register'
     element= {
     
     <Register /> } 
     
     />
   
   <Route path='/Login'
   element = {<Login />}
   
   />
   <Route path='/Acceuil'
   element = {<Acceuil />}
   
   />
   <Route path='/Create'
   element = {<Create />}
   
   />
   <Route path='/Post'
   element = {<Table />} 

   />
   
   <Route path='/Support'
   element ={<Support />}
   
   />
   
   
   </Routes>
   </BrowserRouter>
   
   <Toaster/>
   
   </>
  );
}

export default App
