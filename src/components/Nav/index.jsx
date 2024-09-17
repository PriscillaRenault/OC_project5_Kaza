import '../../scss/base/base.scss'
import './style.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	const [selected, setSelected] = useState('Accueil')

	const handleClick = (item) => {
		setSelected(item)
	}

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__list--item'>
					<Link
						to='/'
						className={`nav__list--link ${
							selected === 'Accueil' ? 'selected' : ''
						}`}
						onClick={() => handleClick('Accueil')}
					>
						Accueil
					</Link>
				</li>
				<li className='nav__list--item'>
					<Link
						to='/about'
						className={`nav__list--link ${
							selected === 'A propos' ? 'selected' : ''
						}`}
						onClick={() => handleClick('A propos')}
					>
						A propos
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
