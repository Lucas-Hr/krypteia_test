import React from 'react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Link } from 'lucide-react'
import { MapPinned } from 'lucide-react'

const Card = ({
  name, 
  brewery_type, 
  country, 
  state, 
  city, 
  street, 
  phone, 
  website_url, 
  latitude, 
  longitude, 
  view, 
  setView, 
  setIsActive, 
  setPosition, 
  setZoom
  }) => {
    
  const viewOnMap = () => {
    setView("map");
    setIsActive({map : true, layout : false});
    setPosition({latitude : latitude, longitude : longitude});
    setZoom(15);
  }

  return (
    <div className='px-4 py-2 bg-white rounded-md shadow-sm cursor-pointer m-2'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold '>{name}</h1>
        <h2 className='text-gray-500 text-[0.8rem] font-thin ps-2'>{brewery_type}</h2>
      </div> 

      <div className='mt-3'>
        <div className='flex items-center'>
          <MapPin className='w-[15px] h-[15px] text-gray-800 me-2'/>
          <p className='text-gray-500 text-[0.8rem]'>{country}, {state}, <br />{city}, {street}</p>
        </div>

        <div className='flex items-center mt-2'>
          <Phone className='w-[15px] h-[15px] text-gray-800 me-2'/>
          <p className='text-gray-500 text-[0.8rem] '>{phone}</p>
        </div>

        <div className='flex items-center mt-2'>
          <Link className='w-[15px] h-[15px] text-gray-800 me-2'/>
          <a className='text-gray-500 text-[0.8rem] hover:underline' href={website_url}>{website_url}</a>
        </div>
      </div>
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center '>
          <MapPinned className='w-[15px] h-[15px] text-gray-800 me-2'/>
          <p className='text-gray-500 text-[0.5rem]'>
          {latitude === 0 ? "Unknown" : latitude}
          <br />
          {longitude === 0 ? "Unknown" : longitude}
          </p>
        </div>   
        { view === "card" && <button className='bg-blue-500 text-white px-2 py-1 rounded-sm text-[0.8rem] cursor-pointer' onClick={viewOnMap}>View on map</button>}
      </div>
    </div>
  )
}

export default Card