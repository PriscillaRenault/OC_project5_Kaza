import PropTypes from 'prop-types'
import './style.scss'

function LodgingInfo({ title, location }) {
	return (
		<div className='lodging'>
			<h1 className='lodging__title'>{title}</h1>
			<p className='lodging__location'>{location}</p>
		</div>
	)
}

LodgingInfo.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
}

export default LodgingInfo
