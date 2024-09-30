import '../../scss/base/base.scss'
import './style.scss'

function Banner({ title, backgroundImage }) {
	return (
		<div className='banner' data-background={backgroundImage}>
			<h1 className='banner__title'>{title}</h1>
		</div>
	)
}

import PropTypes from 'prop-types'
Banner.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string.isRequired,
}

export default Banner
