import { useState } from "react"
import Map from "./components/Map"
import Card from "./components/Card"
import { useBrewery } from "./context/breweryContext"
import Switch from "./components/Switch"
const App = () => {
  const {brewery, setBrewery} = useBrewery()
  const [view, setView] = useState("map")
  return (
    <div className="px-10 py-4 bg-gray-100">
      <Switch setView={setView}/>
      {
        view === 'map' ? <Map /> :
        <div className=" flex flex-wrap  mt-12">
          {
            brewery.map((b, index) => {
              return (
                <div className="m-2" key={index}>
                  <Card name={b.name} brewery_type={b.brewery_type} country={b.country} state={b.state} city={b.city} street={b.street} phone={b.phone} website_url={b.website_url ?? "Unknown"}/>
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
