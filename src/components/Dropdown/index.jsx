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

	// Fonction pour gérer l'affichage des items
	const renderDropdownItem = (title, content, index, customClass) => {
		const isOpen = openIndices.includes(index)

		return (
			<div className={`dropdown ${customClass}`} key={index}>
				<details
					open={isOpen}
					onToggle={() => {
						if (isOpen) {
							setOpenIndices(
								openIndices.filter((i) => i !== index)
							) // Fermer
						} else {
							setOpenIndices([...openIndices, index]) // Ouvrir
						}
					}}
				>
					<summary className='dropdown__title'>
						<p>{title}</p>
						<FontAwesomeIcon
							icon={isOpen ? faChevronUp : faChevronDown}
							className='dropdown__icon'
						/>
					</summary>
					<div className='dropdown__content'>{content}</div>
				</details>
			</div>
		)
	}

	// Filtrer les données pour trouver l'élément correspondant à validLodgingId
	if (source === '/data/data.json') {
		const lodging = data.find((item) => item.id === validLodgingId)

		// Si l'hébergement n'est pas trouvé
		if (!lodging) {
			return <span>Aucun hébergement trouvé</span>
		}

		// Gérer les équipements et la description
		if (dataToggle === 'equipments') {
			return renderDropdownItem(
				'Équipements',
				lodging.equipments.map((item, index) => (
					<p key={index}>{item}</p>
				)),
				0,
				'dropdown__lodging'
			)
		}

		if (dataToggle === 'description') {
			return renderDropdownItem(
				'Description',
				<p>{lodging.description}</p>,
				1,
				'dropdown__lodging'
			)
		}
	}

	if (source === '/data/about.json') {
		return (
			<div className='about'>
				{data.map((item) =>
					renderDropdownItem(
						item.title,
						<p>{item.content}</p>,
						item.title,
						'dropdown__about'
					)
				)}
			</div>
		)
	}
}
Dropdown.propTypes = {
	source: PropTypes.string.isRequired,
	dataToggle: PropTypes.string,
	dataLodgingId: PropTypes.string,
}

export default Dropdown
