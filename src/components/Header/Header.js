import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header section__padding">
            <div className="header__container">
                <span className="header__logo">
                    <span>Mi</span>
                    <span>Casa</span>
                </span>
                <div className="header__controls">
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
