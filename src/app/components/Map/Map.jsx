import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map({ hosting }) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const { latitude, longitude, address, postalCode, city, link, name } = hosting
  const position = [latitude, longitude]

  const iconNantesJS = new L.Icon({
    iconUrl: 'logotype.png',
    iconRetinaUrl: null,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [70, 70],
    className: 'marker',
  })

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      dragging={true}
      tap={true}
      className="map-container"
      style={{ height: '100%', width: '100%', minHeight: '20rem' }}
    >
      <TileLayer
        attribution="&amp;copy
                <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>
                &amp;copy <a href=&quot;http://osm.org/copyright&quot;>Mapbox</a>
                 contributors"
        url="https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        accessToken={token}
        id='streets-v9'
      />
      <Marker position={position} icon={iconNantesJS}>
        <Popup>
          <div>
            <b>
              <a href={link}>{name}</a>
            </b>
            <br />
            {address}
            <br />
            {postalCode}
            <br />
            {city}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
