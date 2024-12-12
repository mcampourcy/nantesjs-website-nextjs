import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map({ hosting }) {
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
        attribution='&amp;&copy;
        <a href="https://www.stadiamaps.com/">Stadia Maps</a>
        &amp; &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
        &amp; &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}"
        ext="png"
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
