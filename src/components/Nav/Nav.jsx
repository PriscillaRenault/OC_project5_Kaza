import "../../scss/base/base.scss";
import "./Nav.scss";
import { useState } from "react";

function Nav() {
	const [selected, setSelected] = useState("Accueil");

	const handleClick = (item) => {
		setSelected(item);
	};

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__list--item'>
					<a
						href='#'
						className={`nav__list--link ${
							selected === "Accueil" ? "selected" : ""
						}`}
						onClick={() => handleClick("Accueil")}
					>
						Accueil
					</a>
				</li>
				<li className='nav__list--item'>
					<a
						href='#'
						className={`nav__list--link ${
							selected === "A propos" ? "selected" : ""
						}`}
						onClick={() => handleClick("A propos")}
					>
						A propos
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
