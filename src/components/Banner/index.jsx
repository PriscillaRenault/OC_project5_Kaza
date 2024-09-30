// import '../../scss/base/base.scss'
import './style.scss'

function Banner({ title, backgroundImageClass }) {
	return (
		<div className={`banner ${backgroundImageClass}`}>
			<h1 className='banner__title'>{title}</h1>
		</div>
	)
}

import PropTypes from 'prop-types'
Banner.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundImageClass: PropTypes.string.isRequired,
}

export default Banner
