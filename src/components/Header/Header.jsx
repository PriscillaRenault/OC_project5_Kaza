import "../../scss/base/base.scss";
import "./Header.scss";
import logo from "../../assets/logo_header.png";
import Nav from "../Nav/Nav";

function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Logo Kaza' className='header__logo' />
			<Nav />
		</header>
	);
}
export default Header;
