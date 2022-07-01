import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

import {faArrowRightToBracket, faUserPlus} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className='header section__padding'>
			<div className='header__container'>
				<span className='header__logo' onClick={() => navigate("/")}>
					<span>Mi</span>
					<span>Casa</span>
				</span>
				<div className='header__controls'>
					<button>
						<FontAwesomeIcon icon={faUserPlus} />
						Register
					</button>
					<button>
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						Login
					</button>
				</div>
			</div>
			<Navbar />
		</header>
	);
};

export default Header;
