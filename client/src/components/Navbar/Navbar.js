import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="navbar__links-item">
                    <a href="/stays">
                        <FontAwesomeIcon icon={faBed} />
                        Stays
                    </a>
                </li>
                <li className="navbar__links-item">
                    <a href="/flights">
                        <FontAwesomeIcon icon={faPlane} />
                        Flights
                    </a>
                </li>
                <li className="navbar__links-item">
                    <a href="/carRent">
                        <FontAwesomeIcon icon={faCar} />
                        Car rentals
                    </a>
                </li>
                <li className="navbar__links-item">
                    <a href="/attractions">
                        <FontAwesomeIcon icon={faBed} />
                        Attractions
                    </a>
                </li>
                <li className="navbar__links-item">
                    <a href="/taxis">
                        <FontAwesomeIcon icon={faTaxi} />
                        Airport taxis
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
