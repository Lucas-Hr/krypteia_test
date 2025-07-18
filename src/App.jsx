import Map from "./components/Map"
import Card from "./components/Card"
import { useBrewery } from "./context/breweryContext"

const App = () => {
  const {brewery, setBrewery} = useBrewery()
  return (
    <>
    
      <Map />
      {/* <div className="bg-gray-100 px-12 py-12 flex flex-wrap">
        {
          brewery.map((b, index) => {
            return (
              <Card key={index} name={b.name} brewery_type={b.brewery_type} country={b.country} state={b.state} street={b.street} phone={b.phone} website_url={b.website_url ?? "Unknown"}/>
            )
          })
        }
      </div> */}
    </>
  )
}

export default App;
