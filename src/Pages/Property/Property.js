import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Header, Footer} from "../../components";

import "./Property.scss";
import images from "./Images";

const Property = () => {
	return (
		<>
			<Header />
			<div className='property section__padding'>
				<div className='property__header'>
					<div className='property__header-content'>
						<h1 className='property__header-content-title'>Apartment Panorama Beach Montazah</h1>
						<div className='property__header-content-location'>
							<FontAwesomeIcon icon={faLocationDot} />
							<span> 21923 Montazah street, Alexandria </span>
						</div>
					</div>
					<button className='property__header-book-button' type='button'>
						Reserve or Book Now!
					</button>
				</div>
				<p className='property__distance'>Excellent location - 500m from center </p>
				<p className='property__price-highlight'>
					Book a stay over $115 at this property and get a free airport taxi
				</p>
				<div className='property__images'>
					<div className='property__images-top'>
						{images.slice(0, 3).map((image, index) => (
							<img src={image.src} alt={`property-view ${index + 1}`} key={index + 1} />
						))}
					</div>
					<div className='property__images-bottom'>
						{images.slice(3).map((image, index) => (
							<img src={image.src} alt={`property-view ${index + 4}`} key={index + 4} />
						))}
					</div>
				</div>
				<div className='property__info'>
					<div className='property__info-description'>
						<p>
							This property is 2 minutes walk from the beach. Located in Alexandria, just 1.8 km
							from Miami Beach, Apartment Panorama Beach Montazah Families only provides beachfront
							accommodations with a bar, a terrace and free WiFi. With garden views, this property
							has a balcony.
						</p>
						<p>
							The air-conditioned apartment consists of 3 separate bedrooms, 2 bathrooms with
							bathrobes and slippers, and a seating area. There's a dining area and a kitchen
							complete with a microwave, a fridge and an oven.
						</p>
						<p>
							Alexandria Zoo is 9.7 km from the apartment, while Catacombs of Kom el Shoqafa is 14.5
							km away. The nearest airport is Borg El Arab International, 49.9 km from Apartment
							Panorama Beach Montazah Families only, and the property offers a paid airport shuttle
							service.
						</p>
					</div>
					<div className='property__info-highlights'>
						<h2>Property Highlights</h2>
						<h3>Perfect for a 9-night stay!</h3>
						<span>
							<FontAwesomeIcon icon={faLocationDot} />
							Top Location: Highly rated by recent guests (9.6)
						</span>
						<span>
							<b>$945</b>
							(9 nights)
						</span>
						<button type='button'>Reserve</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Property;
