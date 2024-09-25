import { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0) // état pour l'image affichée

	if (!pictures || pictures.length === 0) {
		return <span>Aucune image à afficher</span>
	}

	// Fonction pour aller à l'image suivante
	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
		)
	}

	// Fonction pour aller à l'image précédente
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
					src={pictures[currentIndex]} // Utilisation de la prop pictures
					alt={`Image ${currentIndex + 1}`} // Modifiez l'alt en fonction de vos besoins
				/>
				<div className='slider__counter'>
					{currentIndex + 1}/{pictures.length}{' '}
					{/* Mettez à jour le compteur */}
				</div>
			</div>
		</div>
	)
}

Slider.propTypes = {
	pictures: PropTypes.array.isRequired,
}

export default Slider
