import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBar.scss';

const types = ['buy', 'rent'];

function SearchBar() {
	const [query, setQuery] = useState({
		type: 'buy',
		location: '',
		minPrice: 0,
		maxPrice: 0
	});

	const navigate = useNavigate(); // хук для навігації

	const switchType = (val) => {
		setQuery(prev => ({ ...prev, type: val }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// програмно переходимо на сторінку /list
		navigate('/list');
	};

	return (
		<div className="searchBar">
			<div className="type">
				{types.map(type => (
					<button key={type} onClick={() => switchType(type)}
						className={query.type === type ? 'active' : ''}>
						{type}
					</button>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<input type="text" name='location' placeholder='City Location' />
				<input type="number" name='minPrice' min={0} max={10000000} placeholder='Min price' />
				<input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
				<button type="submit">
					<img src={`${import.meta.env.BASE_URL}/search.png`} alt="" />
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
