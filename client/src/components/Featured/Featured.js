import {useRef, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faHotel,
	faBuilding,
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";

import "./Featured.scss";
import "react-multi-carousel/lib/styles.css";
import PropertyCard from "./PropertyCard/PropertyCard";

import {dummyProperies} from "./dummyData";
const Featured = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: {max: 4000, min: 3000},
			items: 5,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 4,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	};

	const [activeArrow, setActiveArrow] = useState({
		left: false,
		right: true,
	});

	const [activeTab, setActiveTab] = useState("House");

	const carouselRef = useRef();

	const handleLeftArrow = () => {
		const prevSlide = carouselRef.current.state.currentSlide - 1;
		carouselRef.current.previous();
		carouselRef.current.goToSlide(prevSlide);
		if (prevSlide === 0) {
			setActiveArrow({
				left: false,
				right: true,
			});
			return;
		}
		setActiveArrow({
			left: true,
			right: true,
		});
	};

	const handleRightArrow = () => {
		const nextSlide = carouselRef.current.state.currentSlide + 1;
		carouselRef.current.next();
		carouselRef.current.goToSlide(nextSlide);
		if (
			nextSlide ===
			carouselRef.current.state.totalItems - carouselRef.current.state.slidesToShow
		) {
			setActiveArrow({
				left: true,
				right: false,
			});
			return;
		}
		setActiveArrow({
			left: true,
			right: true,
		});
	};
	return (
		<div className='featured'>
			<div className='featured__container'>
				<div className='featured__container-title'>
					<h2>Featured Stays</h2>
				</div>
				<div className='featured__container-tabs'>
					<button
						className={activeTab === "House" ? "active" : ""}
						onClick={() => setActiveTab("House")}
						type='button'>
						<FontAwesomeIcon icon={faHouse} />
						House
					</button>
					<button
						className={activeTab === "Hotel" ? "active" : ""}
						onClick={() => setActiveTab("Hotel")}
						type='button'>
						<FontAwesomeIcon icon={faHotel} />
						Hotel
					</button>
					<button
						className={activeTab === "Apartment" ? "active" : ""}
						onClick={() => setActiveTab("Apartment")}
						type='button'>
						<FontAwesomeIcon icon={faBuilding} />
						Apartment
					</button>
				</div>
				<div className='featured__container-arrows'>
					<button
						onClick={handleLeftArrow}
						className={activeArrow.left ? "active" : ""}
						disabled={!activeArrow.left}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
					<button
						onClick={handleRightArrow}
						className={activeArrow.right ? "active" : ""}
						disabled={!activeArrow.right}>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			</div>
			<Carousel
				responsive={responsive}
				ref={carouselRef}
				arrows={false}
				containerClass='carousel-container'>
				{dummyProperies.map((property) => (
					<PropertyCard
						name={property.name}
						roomNumber={property.roomNumber}
						price={property.price}
						source={property.source}
						key={property.id}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default Featured;
