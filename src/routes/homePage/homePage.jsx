import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar';

function HomePage() {
	return (
		<div className="homePage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className='title'>
						Find Real Estate & Get Your Dream Place
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium ab magni eveniet! Totam voluptatum consequatur cum aliquid, ullam, temporibus aliquam voluptate iusto eveniet eius animi quam perspiciatis deleniti quis.
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Award Gained</h2>
						</div>
						<div className="box">
							<h1>1200</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src={`${import.meta.env.BASE_URL}bg.png`} alt="" />
			</div>
		</div>
	)
}

export default HomePage