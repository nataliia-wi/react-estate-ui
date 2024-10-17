import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import { Icon } from "leaflet";
import pinMap from "/pinMap.png";

function Pin({ item }) {
	const customIcon = new Icon({
		iconUrl: pinMap,
		iconSize: [35, 32]
	}

	)
	return (
		<Marker position={[item.latitude, item.longitude]} icon={customIcon}>
			<Popup>
				<div className="popupContainer">
					<img src={item.img} alt="" />
					<div className="textContainer">
						<Link to={`${item.id}`}>{item.title}</Link>
						<span>{item.bedroom} bedroom</span>
						<b>$ {item.price}</b>
					</div>
				</div>
			</Popup>
		</Marker>
	);
}

export default Pin;