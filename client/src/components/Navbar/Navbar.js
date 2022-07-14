import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faTaxi} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__links'>
				<li className='navbar__links-item'>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to='/stays'>
						<FontAwesomeIcon icon={faBed} />
						Stays
					</NavLink>
				</li>
				<li className='navbar__links-item'>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to='/flights'>
						<FontAwesomeIcon icon={faPlane} />
						Flights
					</NavLink>
				</li>
				<li className='navbar__links-item'>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to='/carRent'>
						<FontAwesomeIcon icon={faCar} />
						Car rentals
					</NavLink>
				</li>
				<li className='navbar__links-item'>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to='/attractions'>
						<FontAwesomeIcon icon={faBed} />
						Attractions
					</NavLink>
				</li>
				<li className='navbar__links-item'>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to='/taxis'>
						<FontAwesomeIcon icon={faTaxi} />
						Airport taxis
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
