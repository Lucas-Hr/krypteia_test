import { Search } from 'lucide-react'
const SearchBrewery = ({setSearch}) => {
  return (
    <div className='border border-gray-100 rounded-lg shadow-sm px-4 py-2 bg-white text-sm flex items-center'>
        <input type="text" onChange={(e) =>{setSearch(e.target.value)}}  placeholder='Search brewery...' className='focus:outline-0'/>
        <Search className='text-sm text-gray-500 w-[20px] h-[20px]'/>
    </div>
  )
}

export default SearchBrewery