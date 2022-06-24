import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faDribbble, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
	return (
		<div className='footer section__padding'>
			<div className='footer__info'>
				<div className='footer__info-logo'>
					<span>Mi</span>
					<span>Casa</span>
				</div>
				<div className='footer__info-text'>
					<p>Copyrights MiCasa Homes and Properties</p>
					<p>All rights reserved.</p>
				</div>
				<div className='footer__info-social'>
					<a href='#Social'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href='#Social'>
						<FontAwesomeIcon icon={faDribbble} />
					</a>
					<a href='#Social'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href='#Social'>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</div>
			</div>
			<div className='footer__links'>
				<div className='footer__links-list'>
					<h4>Company</h4>
					<ul>
						<li>About us</li>
						<li>Blog</li>
						<li>Contact us</li>
						<li>Pricing</li>
						<li>Testimonials</li>
					</ul>
				</div>
				<div className='footer__links-list'>
					<h4>Support</h4>
					<ul>
						<li>Help center</li>
						<li>Terms of service</li>
						<li>Legal</li>
						<li>Privacy policy</li>
						<li>Status</li>
					</ul>
				</div>
			</div>
			<div className='footer__email'>
				<h4>Stay up to date</h4>
				<input type='email' placeholder='Your email address' />
			</div>
		</div>
	);
};

export default Footer;
