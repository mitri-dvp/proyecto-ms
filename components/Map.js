import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

export default function Map() {
  return (
    <MapContainer center={[10.69370236730074, -71.6341923284407]} zoom={13} scrollWheelZoom={true} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.69370236730074, -71.6341923284407]} icon={icon}>
        <Popup>
          Encuentranos aquí.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

const icon = L.icon({iconUrl: '/assets/marker-2.png'});
