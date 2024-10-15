import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({ items }) {
	return (
		<MapContainer center={[50.445910215185116, 30.538599824957814]} zoom={10} scrollWheelZoom={true} className='map'>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map(item => (
				<Pin item={item} key={item.id} />
			))}
		</MapContainer>
	)
}

export default Map