import React from 'react'
import { LayoutDashboard, Map} from 'lucide-react'

const Switch = ({setView , isActive, setIsActive}) => {

  return (
    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-sm border border-gray-100 w-[70px] fixed'>
        <Map className={isActive.map ? 'w-[20px] h-[20px] text-blue-500 mx-1 cursor-pointer font-bold' : 'w-[15px] h-[15px] text-gray-800 mx-1 cursor-pointer'} onClick={() => {setView('map'); setIsActive({map : true, layout : false})}}/>
        <LayoutDashboard className={isActive.layout ?  'w-[20px] h-[20px] text-blue-500 mx-1 cursor-pointer font-bold' : 'w-[15px] h-[15px] text-gray-800 mx-1 cursor-pointer' } onClick={() => {setView('card'); setIsActive({map : false, layout:true})}}/>
    </div>
  )
}

export default Switch