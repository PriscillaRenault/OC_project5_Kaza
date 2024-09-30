// import '../../scss/base/base.scss'
import './style.scss'

/**
 * Create banner use on about page and gallery page
 * @param {string} title - The title display on the banner
 * @param {string} backgroundImageClass - The class to apply background image about / home
 */

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
