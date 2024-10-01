import './style.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ dataRating }) {
	const rating = dataRating
	const ratingNumber = parseInt(rating)
	const totalStars = 5

	return (
		<div className='rating'>
			{[...Array(totalStars)].map((_, index) => (
				<FontAwesomeIcon
					key={index}
					icon={faStar}
					className={`rating__star ${
						index < ratingNumber ? 'rating__star--filled' : ''
					}`}
				/>
			))}
		</div>
	)
}

Rating.propTypes = {
	dataRating: PropTypes.string.isRequired,
}

export default Rating
