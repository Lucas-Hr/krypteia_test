import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useBrewery } from '../context/breweryContext'
import Card from './Card';
import 'leaflet/dist/leaflet.css';


const Map = () => {
    const {brewery, setBrewery} = useBrewery();
  return (
    <MapContainer center={[35.25738891, -97.46818222]} zoom={13} scrollWheelZoom={false} style={{width : "60vw", height : "60vh"}} className='absolute top-[200px] left-[300px]' >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            brewery.map((b, index) => {
                return (
                    <Marker key={index} position={[`${Number(b.latitude) ?? 0}` , `${Number(b.longitude) ?? 0}`]}>
                        <Popup style={{width : 200, height : 50}}>
                            <Card name={b.name} brewery_type={b.brewery_type} country={b.country} state={b.state} street={b.street} phone={b.phone} website_url={b.website_url ?? "Unknown"}/>
                        </Popup>
                    </Marker>
                )
            })
        }
        
    </MapContainer>

  )
}

export default Map