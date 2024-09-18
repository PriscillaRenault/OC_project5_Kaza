import '../../scss/base/base.scss'
import './style.scss'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown({ source }) {
	const [data, setData] = useState([]) // Initialise l'état 'data' avec un tableau vide
	const [openIndices, setOpenIndices] = useState([]) // Stocke les indices ouverts

	useEffect(() => {
		let jsonFile = source

		fetch(jsonFile)
			.then((response) => response.json()) // Convertit la réponse en JSON
			.then((jsonData) => setData(jsonData)) // Met à jour l'état 'data' avec les données récupérées
			.catch((error) =>
				console.error('Erreur lors du chargement des données', error)
			)
	}, [source])

	// Fonction pour gérer l'ouverture/fermeture de chaque élément via 'onToggle'
	const handleToggle = (index, isOpen) => {
		if (isOpen) {
			// Si l'élément est ouvert, ajouter son index à 'openIndices'
			setOpenIndices([...openIndices, index])
		} else {
			// Si l'élément est fermé, retirer son index de 'openIndices'
			setOpenIndices(openIndices.filter((i) => i !== index))
		}
	}

	// Générer le contenu des DropdownItems
	const renderDropdownItems = () => {
		if (!data || data.length === 0) {
			return <p>Aucune donnée à afficher</p>
		}

		return data.map((item, index) => (
			<div key={index} className='dropdown-item'>
				<details
					open={openIndices.includes(index)} // Ouvre uniquement si l'index est dans 'openIndices'
					onToggle={(e) => handleToggle(index, e.target.open)} // Utilise 'onToggle' pour gérer l'état d'ouverture
				>
					<summary>
						{item.title}
						<FontAwesomeIcon
							icon={
								openIndices.includes(index)
									? faChevronUp
									: faChevronDown
							} // Change l'icône en fonction de l'état
							className='dropdown-icon'
						/>
					</summary>
					<div className='dropdown-content'>
						<p>{item.content}</p>
					</div>
				</details>
			</div>
		))
	}

	return <div className='dropdown'>{renderDropdownItems()}</div>
}

Dropdown.propTypes = {
	source: PropTypes.string.isRequired, // 'source' doit être une chaîne de caractères
}

export default Dropdown
