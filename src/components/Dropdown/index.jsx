//partager le contexte
import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from '../../utils/hooks'
import { IdLodgingContext } from '../../utils/context'

function Dropdown({ source, dataToggle, dataLodgingId }) {
	const [openIndices, setOpenIndices] = useState([]) // open index state
	const { data, isLoading, error } = useFetch(source)
	const { lodgingId } = useContext(IdLodgingContext)
	const validLodgingId = dataLodgingId || lodgingId
	if (isLoading) {
		return <span>Chargement en cours...</span>
	}
	if (error) {
		return <span>Problème lors du chargement des données</span>
	}

	const handleToggle = (index, isOpen) => {
		if (isOpen) {
			setOpenIndices([...openIndices, index])
		} else {
			setOpenIndices(openIndices.filter((i) => i !== index))
		}
	}

	// Render dropdown items
	const renderDropdownItems = () => {
		if (!data || data.length === 0) {
			return <p>Aucune donnée à afficher</p>
		}

		if (source === '/data/about.json') {
			return data.map((item, index) => (
				<div key={index} className='dropdown__item'>
					<details
						open={openIndices.includes(index)}
						onToggle={(e) => handleToggle(index, e.target.open)}
					>
						<summary className='dropdown__title'>
							<p>{item.title}</p>
							<FontAwesomeIcon
								icon={
									openIndices.includes(index)
										? faChevronUp
										: faChevronDown
								}
								className='dropdown__icon'
							/>
						</summary>
						<div className='dropdown__content'>
							<p>{item.content}</p>
						</div>
					</details>
				</div>
			))
		}
		if (source === '/data/data.json') {
			// Filtrer les données pour trouver l'élément correspondant à validLodgingId
			const lodging = data.find((item) => item.id === validLodgingId)

			// Si l'hébergement n'est pas trouvé
			if (!lodging) {
				return <span>Aucun hébergement trouvé</span>
			}

			// Gestion des équipements
			if (dataToggle === 'equipments') {
				const isOpen = openIndices.includes(0) // Vérifie si le premier (et unique) dropdown est ouvert
				return (
					<div className='dropdown__item'>
						<details
							open={isOpen}
							onToggle={() => {
								if (isOpen) {
									setOpenIndices(
										openIndices.filter(
											(index) => index !== 0
										)
									) // Fermer
								} else {
									setOpenIndices([...openIndices, 0]) // Ouvrir
								}
							}}
						>
							<summary className='dropdown__title'>
								<p>Équipements</p>
								<FontAwesomeIcon
									icon={isOpen ? faChevronUp : faChevronDown}
									className='dropdown__icon'
								/>
							</summary>
							<div className='dropdown__content'>
								{lodging.equipments.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
						</details>
					</div>
				)
			}

			// Gestion de la description
			if (dataToggle === 'description') {
				const isOpen = openIndices.includes(1) // Vérifie si le dropdown de description est ouvert
				return (
					<div className='dropdown__item'>
						<details
							open={isOpen}
							onToggle={() => {
								if (isOpen) {
									setOpenIndices(
										openIndices.filter(
											(index) => index !== 1
										)
									) // Fermer
								} else {
									setOpenIndices([...openIndices, 1]) // Ouvrir
								}
							}}
						>
							<summary className='dropdown__title'>
								<p>Description</p>
								<FontAwesomeIcon
									icon={isOpen ? faChevronUp : faChevronDown}
									className='dropdown__icon'
								/>
							</summary>
							<div className='dropdown__content'>
								<p>{lodging.description}</p>
							</div>
						</details>
					</div>
				)
			}
		}
	}

	return <div className='dropdown'>{renderDropdownItems()}</div>
}

Dropdown.propTypes = {
	source: PropTypes.string.isRequired,
	dataToggle: PropTypes.string,
	dataLodgingId: PropTypes.string,
}

export default Dropdown
