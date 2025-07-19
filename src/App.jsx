import { use, useState } from "react"
import Map from "./components/Map"
import Card from "./components/Card"
import { useBrewery } from "./context/breweryContext"
import Switch from "./components/Switch"
import SearchBrewery from "./components/SearchBrewery"
const App = () => {
  const {brewery, setBrewery} = useBrewery()
  const [view, setView] = useState("map")
  const [search, setSearch] = useState("")
  const [isActive, setIsActive] = useState({map : true, layout : false});
  const [position, setPosition] = useState({latitude : 35.25738891, longitude : -97.46818222});
  const [zoom, setZoom] = useState(5)
  return (
    <div className="px-10 py-4 bg-gray-100 h-full">
        <Switch setView={setView} isActive={isActive} setIsActive={setIsActive} setZoom={setZoom}/>
        <SearchBrewery setSearch={setSearch} />

      {
        view === 'map' ? <Map search={search} position={position} zoom={zoom} /> :
        <div className=" flex flex-wrap  mt-12">
          {
            brewery.filter((b) => {
                return search.toLowerCase() === ""
                    ? b
                    : b.name.toLowerCase().includes(search);
                }).map((b, index) => {
              return (
                <div className="m-2 grow" key={index}>
                  <Card 
                    name={b.name} 
                    brewery_type={b.brewery_type} 
                    country={b.country} 
                    state={b.state} 
                    city={b.city} 
                    street={b.street} 
                    phone={b.phone} 
                    website_url={b.website_url ?? "Unknown"} 
                    latitude={b.latitude ?? 0} 
                    longitude={b.longitude ?? 0}
                    view={view}
                    setView={setView}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    setPosition={setPosition}
                    setZoom={setZoom}
                  />
                </div>
              )
            })
          }
        </div>
      }
      
    </div>
  )
}

export default App;
