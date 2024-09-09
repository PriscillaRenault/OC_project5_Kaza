import "../scss/base/base.scss";
import "../scss/components/Footer.scss";
import logo from "../assets/logo_footer.png";

function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} alt='logo Kaza' className='footer__img' />
			<p className='footer__text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
