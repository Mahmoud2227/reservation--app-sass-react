import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faUmbrellaBeach, faLeaf, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import Hotel from "../../assets/hotel.webp";

import "./SearchItem.scss";

const SearchItem = () => {
	return (
		<div className='searchItem'>
			<div className='searchItem__image'>
				<img src={Hotel} alt='hotel' />
			</div>
			<div className='searchItem__content'>
				<div className='searchItem__content-header'>
					<h2>Apartment Panorama Beach Montazah</h2>
					<div className='searchItem__content-header-rating'>
						<p>Wonderful</p>
						<span>9.1</span>
					</div>
				</div>
				<div className='searchItem__content-destination'>
					<p>Alexandria</p>
					<p>Show on map</p>
					<span>12.4 km from center</span>
				</div>
				<div className='searchItem__content-features'>
					<span>
						<FontAwesomeIcon icon={faUmbrellaBeach} /> Beachfront
					</span>
					<span>
						<FontAwesomeIcon icon={faLeaf} /> Travel Sustainable property
					</span>
				</div>
				<div className='searchItem__content-info'>
					<div className='searchItem__content-info-description'>
						<h5>Apartment with Sea View</h5>
						<p>Entire apartment • 3 bedrooms • 2 living rooms • 2 bathrooms • 1 kitchen • 160m²</p>
						<p>7 beds (4 fulls, 2 sofa beds, 1 queen)</p>
					</div>
					<div className='searchItem__content-info-price'>
						<span>$123</span>
						<p>includes taxes and feels</p>
					</div>
				</div>
				<button className='searchItem__content-button' type='button'>
					See availability <FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
		</div>
	);
};

export default SearchItem;
