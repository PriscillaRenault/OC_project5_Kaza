import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [intervalId, setIntervalId] = useState(null)

	// Automatic slide change
	useEffect(() => {
		if (pictures && pictures.length > 1) {
			const newInterval = setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
				)
			}, 5000)
			setIntervalId(newInterval)

			return () => {
				clearInterval(newInterval)
			}
		}
	}, [pictures])

	// Manual changes
	const nextSlide = () => {
		clearInterval(intervalId)
		setCurrentIndex((prevIndex) =>
			prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
		)
		// Redémarrer l'intervalle
		setIntervalId(
			setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
				)
			}, 5000)
		)
	}

	// Manual previous
	const prevSlide = () => {
		clearInterval(intervalId) // Arrêter l'intervalle actif
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
		)
		// Redémarrer l'intervalle
		setIntervalId(
			setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
				)
			}, 3000)
		)
	}

	if (!pictures || pictures.length === 0) {
		return <span>Aucune image à afficher</span>
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
				}}
			>
				{pictures.map((picture, index) => (
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
				{currentIndex + 1}/{pictures.length}
			</div>
		</div>
	)
}

Slider.propTypes = {
	pictures: PropTypes.array.isRequired,
}

export default Slider
