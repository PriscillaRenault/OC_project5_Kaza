import { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	if (!pictures || pictures.length === 0) {
		return <span>Aucune image à afficher</span>
	}

	if (pictures.length === 1) {
		return (
			<div className='slider'>
				<div className='slider__item'>
					<img
						className='slider__img'
						src={pictures[0]}
						alt='Image'
					/>
				</div>
			</div>
		)
	}

	// next
	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
		)
	}

	// previous
	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
		)
	}

	return (
		<div className='slider'>
			<div className='slider__controls'>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className='slider__chevron'
					onClick={prevSlide}
				/>
				<FontAwesomeIcon
					icon={faChevronRight}
					className='slider__chevron'
					onClick={nextSlide}
				/>
			</div>

			<div className='slider__item'>
				<img
					className='slider__img'
					src={pictures[currentIndex]}
					alt={`Image_${currentIndex + 1}`}
				/>
				<div className='slider__counter'>
					{currentIndex + 1}/{pictures.length}{' '}
				</div>
			</div>
		</div>
	)
}

Slider.propTypes = {
	pictures: PropTypes.array.isRequired,
}

export default Slider
