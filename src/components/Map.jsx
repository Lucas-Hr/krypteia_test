import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useBrewery } from '../context/breweryContext'
import Card from './Card';
import 'leaflet/dist/leaflet.css';
import MapPin from '../assets/MapPin';

const Map = ({search, position, zoom}) => {
    const {brewery, setBrewery} = useBrewery();
    console.log(position)
  return (
    <div className='relative mt-12'>
        <div className='bg-white rounded-sm flex items-center px-4 py-2 absolute z-20 top-[20px] right-[100px]'> 
                <MapPin />
                <p className='ms-2 text-sm font-semibold'>Brewery</p>
        </div>
        <MapContainer center={[`${Number(position.latitude) ?? 0}` , `${Number(position.longitude) ?? 0}`]} zoom={zoom} scrollWheelZoom={false} style={{width : "90vw", height : "80vh"}} className='relative  z-10' >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                brewery.filter((b) => {
                return search.toLowerCase() === ""
                    ? b
                    : b.name.toLowerCase().includes(search);
                }).map((b, index) => {
                    return (
                        <Marker key={index} position={[`${Number(b.latitude) ?? 0}` , `${Number(b.longitude) ?? 0}`]}>
                            <Popup>
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
                                />
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    </div>
    

  )
}

export default Map