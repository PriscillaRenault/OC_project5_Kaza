import { Link } from 'react-router-dom'
import './style.scss'

function Error() {
	return (
		<div className='error'>
			<h1 className='error__title'>404</h1>
			<p className='error__message'>
				Oups ! La page que vous demandez n&apos;existe pas
			</p>
			<Link to='/' className='error__redirect'>
				Retourner sur la page d&apos;accueil
			</Link>
		</div>
	)
}
export default Error
