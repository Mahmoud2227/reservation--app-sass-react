import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero section__padding">
            <h1>It's a Big World Out There, Go Explore</h1>
            <p>
                No matter where you're going from,we take you there. We are professional planners
                your vacations
            </p>
            <a href="#featured">
                Explore More
                <span className="slide-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </a>
        </div>
    );
};

export default Hero;
