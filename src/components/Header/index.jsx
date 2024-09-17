import '../../scss/base/base.scss'
import './style.scss'
import logo from '../../assets/logo_header.png'
import Nav from '../Nav/index'

function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Logo Kaza' className='header__logo' />
			<Nav />
		</header>
	)
}
export default Header
