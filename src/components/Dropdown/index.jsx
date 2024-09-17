import '../../scss/base/base.scss'
import './style.scss'
import DropdownItem from '../DropdownItem/index'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

function Dropdown({ source }) {
	const [data, setData] = useState({}) // Initialise l'état 'data' avec un objet vide

	useEffect(() => {
		let jsonFile = ''

		// Déterminer le fichier à charger en fonction de la prop 'source'
		if (source === 'about') {
			jsonFile = '/data/about.json'
		} else if (source === 'data') {
			jsonFile = '/data/data.json'
		}

		fetch(jsonFile)
			.then((response) => response.json()) // Convert to JSON
			.then((jsonData) => setData(jsonData)) // update state
			.catch((error) =>
				console.error('Erreur lors du chargement des données', error)
			) // Gère les erreurs
	}, [source]) // Le hook dépend de 'source', il sera relancé si 'source' change

	// Générer le contenu des DropdownItems
	const renderDropdownItems = () => {
		return Object.entries(data).map(([key, value], index) => (
			<DropdownItem key={index}>
				<details>
					<summary>{key}</summary>
					<div>
						{Array.isArray(value) ? (
							<ul>
								{value.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						) : (
							<p>{value}</p>
						)}
					</div>
				</details>
			</DropdownItem>
		))
	}

	return <div className='dropdown'>{renderDropdownItems()}</div>
}

Dropdown.propTypes = {
	source: PropTypes.string.isRequired, // 'source' doit être une chaîne de caractères
}

export default Dropdown
