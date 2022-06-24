import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const CustomArrow = ({onClick, ...rest}) => {
	const {
		onMove,
		carouselState: {currentSlide, deviceType},
	} = rest;
	return (
		<button className='carousel-arrow'>
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
	);
};

export default CustomArrow;
