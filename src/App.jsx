import React from 'react'
import { PrivyProvider } from '@privy-io/react-auth'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
     {/* Sidebar */}
     <div className=" relative hidden mr-10 sm:flex">
      <Sidebar/>
     </div>
    <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
      {/* navbar */}
      <Navbar/>

      <Routes>
        <Route path="/" element={<div> Home page</div>}/>
      </Routes>
    </div>

    </div>


  )
}

export default App
