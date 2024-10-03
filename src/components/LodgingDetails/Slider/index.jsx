import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(1)
	const [transitionEnabled, setTransitionEnabled] = useState(true)
	const [isManualControl, setIsManualControl] = useState(false)

	const enhancedPictures = [
		pictures[pictures.length - 1],
		...pictures,
		pictures[0],
	]

	// Automatic slide change
	useEffect(() => {
		let intervalId
		if (pictures && pictures.length > 1 && !isManualControl) {
			intervalId = setInterval(() => {
				nextSlide()
			}, 5000)
		}

		return () => {
			if (intervalId) clearInterval(intervalId)
		}
	}, [pictures, isManualControl])

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + 1)
		setIsManualControl(true)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - 1)
		setIsManualControl(true)
	}

	// delete the transition when the first or last image is displayed
	useEffect(() => {
		if (currentIndex === 0) {
			setTimeout(() => {
				setTransitionEnabled(false)
				setCurrentIndex(pictures.length)
			}, 100)

			setTimeout(() => setTransitionEnabled(true), 350)
		} else if (currentIndex === enhancedPictures.length - 1) {
			setTimeout(() => {
				setTransitionEnabled(false)
				setCurrentIndex(1)
			}, 200)

			setTimeout(() => setTransitionEnabled(true), 350)
		}
	}, [currentIndex, enhancedPictures.length, pictures.length])

	// Restart the automatic slide after a manual interaction
	useEffect(() => {
		if (isManualControl) {
			const timeoutId = setTimeout(() => {
				setIsManualControl(false)
			}, 5000)

			return () => clearTimeout(timeoutId)
		}
	}, [isManualControl])

	if (pictures.length === 1) {
		return (
			<div className='slider'>
				<div className='slider__container'>
					<img
						className='slider__img'
						src={pictures[0]}
						alt='Image_1'
					/>
				</div>
			</div>
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

			<div
				className='slider__container'
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
					transition: transitionEnabled
						? 'transform 0.3s ease-in-out'
						: 'none',
				}}
			>
				{enhancedPictures.map((picture, index) => (
					<div className='slider__item' key={index}>
						<img
							className='slider__img'
							src={picture}
							alt={`Image_${index + 1}`}
						/>
					</div>
				))}
			</div>

			<div className='slider__counter'>
				{currentIndex}/{pictures.length}
			</div>
		</div>
	)
}

Slider.propTypes = {
	pictures: PropTypes.array.isRequired,
}

export default Slider
