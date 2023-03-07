import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map(props) {
    const {lat,lng, zoom} = props
    const [cordinates , setCordinates] = useState(props);

    useEffect(() => {
        // console.log("Trigger");
        setCordinates(props);
    }, [cordinates]);

  return (
 
    <MapContainer key={lat}center={[lat,
            lng]} zoom={zoom}scrollWheelZoom={true} style={{zIndex:-1, top:-85}}>
    <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker
         key={1}
          position={[
            lat,
            lng
          ]}
        />
  </MapContainer>

   
  )
}
