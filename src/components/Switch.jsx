import { LayoutDashboard, Map} from 'lucide-react'

const Switch = ({setView , isActive, setIsActive, setZoom}) => {
  const mapView = () => {
    setView('map'); 
    setIsActive({map : true, card : false});
    setZoom(5);
  }

  const cardView = () => {
    setView('card'); 
    setIsActive({map : false, card : true})
  }

  return (
    <div className='flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-sm border border-gray-100 w-[70px] me-2'>
      <Map className={isActive.map ? 'w-[20px] h-[20px] text-blue-500 mx-1 cursor-pointer font-bold' : 'w-[15px] h-[15px] text-gray-800 mx-1 cursor-pointer'} onClick={mapView}/>
      <LayoutDashboard className={isActive.card ?  'w-[20px] h-[20px] text-blue-500 mx-1 cursor-pointer font-bold' : 'w-[15px] h-[15px] text-gray-800 mx-1 cursor-pointer' } onClick={cardView}/>
    </div>
  )
}

export default Switch