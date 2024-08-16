import React from 'react'
import { navlinks } from '../constants'
import { sun } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { IconHeartHandshake } from "@tabler/icons-react";

const Icon=({style,name,imageUrl,isActive,disabled,handleClick})=>{
    <div className={`h-[48px] w-[48px] rounded-[10px] ${isActive&& isActive===name&& 'bg-[#2c2f32]'} flex items-center justify-center ${style}`}
    onClick={handleClick}

    >
        {!isActive&&<img src={imageUrl} alt={name} className='h-6 w-6'/>}
        {isActive&&<img src={imageUrl} alt={name} className={`h-6 w-6 ${isActive && 'grayscale-0'}`}/>}

    </div>

}

const Sidebar = () => {
    const navigate=useNavigate()
    const [active,setActive]=React.useState('dashboard')
  return (
    <div className=' sticky flex flex-col items-center justify-between top-5 h-[93vh]'>

        <Link to='/'>
         <div className="rounded-[10px] bg-[#2c2f32] p-2">
          <IconHeartHandshake size={40} color="#1ec070" className=" " />
        </div>

        </Link>
      
    </div>
  )
}

export default Sidebar
