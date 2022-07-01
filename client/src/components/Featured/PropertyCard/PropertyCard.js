import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faWifi, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

import "./PropertyCard.scss";

import group from "../../../assets/group-bubbles.png";

const PropertyCard = ({source, name, roomNumber, price}) => {
	return (
		<div className='property__card'>
			<div className='property__card__image'>
				<img src={source} alt={name} />
			</div>
			<div className='property__card__info'>
				<h4>{name}</h4>
				<div className='property__card__info-props'>
					<span>
						<FontAwesomeIcon icon={faUser} />
						<p>{roomNumber} Bedroom</p>
					</span>
					<span>
						<FontAwesomeIcon icon={faWifi} />
						<p>Wifi</p>
					</span>
				</div>
			</div>
			<div className='property__card__price'>
				<p>
					{price.value} <span>/{price.rateBy}</span>
				</p>
			</div>
			<div className='property__card__group'>
				<img src={group} alt='group' />
				<p>have interest in this property</p>
			</div>
			<button className='property__card__button' type='button'>
				View More <FontAwesomeIcon icon={faArrowRightLong} />
			</button>
		</div>
	);
};

export default PropertyCard;
