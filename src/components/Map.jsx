import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useBrewery } from '../context/breweryContext'
import Card from './Card';
import 'leaflet/dist/leaflet.css';
import MapPin from '../assets/MapPin';

const Map = () => {
    const {brewery, setBrewery} = useBrewery();
  return (
    <div className='relative mt-12'>
        <div className='bg-white rounded-sm flex items-center px-4 py-2 absolute z-20 top-[20px] right-[100px]'> 
                <MapPin />
                <p className='ms-2 text-sm font-semibold'>Brewery</p>
        </div>
        <MapContainer center={[35.25738891, -97.46818222]} zoom={5} scrollWheelZoom={false} style={{width : "90vw", height : "80vh"}} className='relative  z-10' >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                brewery.map((b, index) => {
                    return (
                        <Marker key={index} position={[`${Number(b.latitude) ?? 0}` , `${Number(b.longitude) ?? 0}`]}>
                            <Popup>
                                <Card name={b.name} brewery_type={b.brewery_type} country={b.country} state={b.state} city={b.city} street={b.street} phone={b.phone} website_url={b.website_url ?? "Unknown"}/>
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