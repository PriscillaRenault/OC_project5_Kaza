import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(1) // Commencer à 1 pour éviter le rembobinage dès le début
	const [transitionEnabled, setTransitionEnabled] = useState(true) // Contrôle de la transition

	// Ajouter les images dupliquées pour une transition fluide
	const enhancedPictures = [
		pictures[pictures.length - 1],
		...pictures,
		pictures[0],
	]

	// Automatic slide change
	useEffect(() => {
		if (pictures && pictures.length > 1) {
			const newInterval = setInterval(() => {
				nextSlide() // Passer automatiquement à la diapositive suivante
			}, 5000)

			return () => {
				clearInterval(newInterval)
			}
		}
	}, [pictures]) // Ajout de 'pictures' comme dépendance

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + 1)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - 1)
	}

	// Contrôler la transition quand on passe dupliqué à réel
	useEffect(() => {
		if (currentIndex === 0) {
			// Désactiver temporairement la transition pour sauter de la première image dupliquée à la vraie dernière image
			setTimeout(() => {
				setTransitionEnabled(false)
				setCurrentIndex(pictures.length)
			}, 300) // Le délai doit correspondre à la durée de la transition

			setTimeout(() => setTransitionEnabled(true), 350) // Réactiver la transition
		} else if (currentIndex === enhancedPictures.length - 1) {
			// Idem, mais pour la dernière image dupliquée à la vraie première
			setTimeout(() => {
				setTransitionEnabled(false)
				setCurrentIndex(1)
			}, 300)

			setTimeout(() => setTransitionEnabled(true), 350)
		}
	}, [currentIndex, enhancedPictures.length, pictures.length]) // Ajout de 'enhancedPictures.length' et 'pictures.length'

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
					transition: transitionEnabled
						? 'transform 0.3s ease-in-out'
						: 'none', // Gérer la transition
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
