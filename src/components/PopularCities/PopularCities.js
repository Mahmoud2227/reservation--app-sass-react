import React from "react";

import city1 from "../../assets/city-1.png";
import city2 from "../../assets/city-2.png";
import city3 from "../../assets/city-3.png";
import city4 from "../../assets/city-4.png";

import "./PopularCities.scss";

const PopularCities = () => {
	return (
		<div className='popular-cities'>
			<h2>Popular Cities</h2>
			<ul className='popular-cities__list'>
				<li>
					<img src={city1} alt='Lagos' />
					<span>Lagos</span>
				</li>
				<li>
					<img src={city2} alt='Paris' />
					<span>Paris</span>
				</li>
				<li>
					<img src={city3} alt='Landon' />
					<span>Landon</span>
				</li>
				<li>
					<img src={city4} alt='Dubai' />
					<span>Dubai</span>
				</li>
			</ul>
		</div>
	);
};

export default PopularCities;
