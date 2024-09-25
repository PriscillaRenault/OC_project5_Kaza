import './style.scss'
import PropTypes from 'prop-types'

function Host({ name, picture }) {
	const [firstName, lastName] = name.split(' ')
	return (
		<div className='host'>
			<p className='host__name'>
				{' '}
				{firstName}
				<br />
				{lastName}{' '}
			</p>
			<img
				src={picture}
				alt='Photo du propriétaire'
				className='host__img'
			/>
		</div>
	)
}

Host.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
}

export default Host
