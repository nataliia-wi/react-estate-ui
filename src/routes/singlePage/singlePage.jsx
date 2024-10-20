import "./singlePage.scss";
import { useParams } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
	const { id } = useParams();
	const post = singlePostData.find(item => item.id === parseInt(id));// Знаходимо конкретний пост
	if (!post) {
		return <div>Post not found</div>; // Виводимо, якщо пост не знайдено
	}
	else {
		return (
			<div className="singlePage">
				<div className="details">
					<div className="wrapper">
						<Slider images={post.img} />
						<div className="info">
							<div className="top">
								<div className="post">
									<h1>{post.title}</h1>
									<div className="address">
										<img src={`${import.meta.env.BASE_URL}/pin.png`} alt="" />
										<span>{post.address}</span>
									</div>
									<div className="price">$ {post.price}</div>
								</div>
								<div className="user">
									<img src={userData.img} alt="" />
									<span>{userData.name}</span>
								</div>
							</div>
							<div className="bottom">{post.description}</div>
						</div>
					</div>
				</div>
				<div className="features">
					<div className="wrapper">
						<p className="title">General</p>
						<div className="listVertical">
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/utility.png`} alt="" />
								<div className="featureText">
									<span>Utilities</span>
									<p>Renter is responsible</p>
								</div>
							</div>
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/pet.png`} alt="" />
								<div className="featureText">
									<span>Pet Policy</span>
									<p>Pets Allowed</p>
								</div>
							</div>
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/fee.png`} alt="" />
								<div className="featureText">
									<span>Property Fees</span>
									<p>Must have 3x the rent in total household income</p>
								</div>
							</div>
						</div>
						<p className="title">Sizes</p>
						<div className="sizes">
							<div className="size">
								<img src={`${import.meta.env.BASE_URL}/size.png`} alt="" />
								<span>80 sqft</span>
							</div>
							<div className="size">
								<img src={`${import.meta.env.BASE_URL}/bed.png`} alt="" />
								<span>2 beds</span>
							</div>
							<div className="size">
								<img src={`${import.meta.env.BASE_URL}/bath.png`} alt="" />
								<span>1 bathroom</span>
							</div>
						</div>
						<p className="title">Nearby Places</p>
						<div className="listHorizontal">
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/school.png`} alt="" />
								<div className="featureText">
									<span>School</span>
									<p>250m away</p>
								</div>
							</div>
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/pet.png`} alt="" />
								<div className="featureText">
									<span>Bus Stop</span>
									<p>100m away</p>
								</div>
							</div>
							<div className="feature">
								<img src={`${import.meta.env.BASE_URL}/fee.png`} alt="" />
								<div className="featureText">
									<span>Restaurant</span>
									<p>200m away</p>
								</div>
							</div>
						</div>
						<p className="title">Location</p>
						<div className="mapContainer">
							<Map items={[post]} />
						</div>
						<div className="buttons">
							<button>
								<img src={`${import.meta.env.BASE_URL}/chat.png`} alt="" />
								Send a Message
							</button>
							<button>
								<img src={`${import.meta.env.BASE_URL}/save.png`} alt="" />
								Save the Place
							</button>
						</div>
					</div>
				</div>
			</div>)
	}
};

export default SinglePage;